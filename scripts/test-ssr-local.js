#!/usr/bin/env node

/**
 * Local SSR Testing Script for FindMeRoom.com
 * Tests the production build locally to simulate production environment
 */

const http = require('http');
const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const TEST_PORT = 4001; // Different port to avoid conflicts
const PROD_PORT = 4000;

class SSRTester {
    constructor() {
        this.server = null;
        this.isWindows = process.platform === 'win32';
    }

    log(message, type = 'info') {
        const timestamp = new Date().toISOString();
        const colors = {
            info: '\x1b[36m',
            success: '\x1b[32m',
            warning: '\x1b[33m',
            error: '\x1b[31m',
            reset: '\x1b[0m'
        };

        console.log(`${colors[type]}[${timestamp}] ${message}${colors.reset}`);
    }

    async buildProduction() {
        this.log('Building application for production...', 'info');

        try {
            execSync('npm run build:prod', { stdio: 'inherit' });
            this.log('✅ Production build completed successfully!', 'success');
            return true;
        } catch (error) {
            this.log('❌ Production build failed!', 'error');
            console.error(error.message);
            return false;
        }
    }

    async startLocalServer() {
        this.log(`Starting local SSR server on port ${TEST_PORT}...`, 'info');

        return new Promise((resolve, reject) => {
            try {
                // Start the SSR server
                this.server = spawn('node', ['dist/sheltos_front/server/server.mjs'], {
                    stdio: ['pipe', 'pipe', 'pipe'],
                    env: { ...process.env, PORT: TEST_PORT }
                });

                let serverReady = false;

                this.server.stdout.on('data', (data) => {
                    const output = data.toString();
                    if (output.includes('Server listening') || output.includes('listening on')) {
                        serverReady = true;
                        this.log(`✅ SSR Server started on http://localhost:${TEST_PORT}`, 'success');
                        resolve();
                    }
                });

                this.server.stderr.on('data', (data) => {
                    console.error('Server Error:', data.toString());
                });

                this.server.on('error', (error) => {
                    this.log(`❌ Failed to start server: ${error.message}`, 'error');
                    reject(error);
                });

                // Timeout after 30 seconds
                setTimeout(() => {
                    if (!serverReady) {
                        this.log('❌ Server startup timeout', 'error');
                        reject(new Error('Server startup timeout'));
                    }
                }, 30000);

            } catch (error) {
                this.log(`❌ Failed to start local server: ${error.message}`, 'error');
                reject(error);
            }
        });
    }

    async testSSRFunctionality() {
        this.log('Testing SSR functionality...', 'info');

        const tests = [
            {
                name: 'Basic HTML Response',
                url: `http://localhost:${TEST_PORT}`,
                check: (response, body) => {
                    return response.statusCode === 200 &&
                           response.headers['content-type']?.includes('text/html') &&
                           body.length > 1000; // Should have substantial HTML
                }
            },
            {
                name: 'Contains App Content',
                url: `http://localhost:${TEST_PORT}`,
                check: (response, body) => {
                    return body.includes('findmeroom') ||
                           body.includes('property') ||
                           body.includes('real estate') ||
                           body.includes('slider-filter-search');
                }
            },
            {
                name: 'Hash Routing Works',
                url: `http://localhost:${TEST_PORT}/#/theme/slider-filter-search`,
                check: (response, body) => {
                    return response.statusCode === 200 &&
                           body.includes('findmeroom');
                }
            },
            {
                name: 'Static Assets Load',
                url: `http://localhost:${TEST_PORT}/styles-`,
                check: (response, body) => {
                    return response.statusCode === 200 &&
                           response.headers['content-type']?.includes('text/css');
                }
            }
        ];

        const results = [];

        for (const test of tests) {
            try {
                const result = await this.makeRequest(test.url);
                const passed = test.check(result.response, result.body);

                results.push({
                    name: test.name,
                    passed,
                    status: passed ? '✅ PASS' : '❌ FAIL',
                    url: test.url,
                    statusCode: result.response.statusCode
                });

                this.log(`${test.name}: ${passed ? '✅ PASS' : '❌ FAIL'}`, passed ? 'success' : 'error');

            } catch (error) {
                results.push({
                    name: test.name,
                    passed: false,
                    status: '❌ ERROR',
                    url: test.url,
                    error: error.message
                });
                this.log(`${test.name}: ❌ ERROR - ${error.message}`, 'error');
            }
        }

        return results;
    }

    makeRequest(url) {
        return new Promise((resolve, reject) => {
            const req = http.get(url, (res) => {
                let body = '';

                res.on('data', (chunk) => {
                    body += chunk;
                });

                res.on('end', () => {
                    resolve({ response: res, body });
                });
            });

            req.on('error', (error) => {
                reject(error);
            });

            req.setTimeout(10000, () => {
                req.destroy();
                reject(new Error('Request timeout'));
            });
        });
    }

    async testPerformance() {
        this.log('Testing performance...', 'info');

        const url = `http://localhost:${TEST_PORT}`;
        const requests = 5;
        const timings = [];

        for (let i = 0; i < requests; i++) {
            const start = Date.now();
            try {
                await this.makeRequest(url);
                const duration = Date.now() - start;
                timings.push(duration);
                this.log(`Request ${i + 1}: ${duration}ms`, 'info');
            } catch (error) {
                this.log(`Request ${i + 1}: Failed - ${error.message}`, 'error');
            }
        }

        if (timings.length > 0) {
            const avg = timings.reduce((a, b) => a + b, 0) / timings.length;
            const min = Math.min(...timings);
            const max = Math.max(...timings);

            this.log(`Performance Results:`, 'info');
            this.log(`  Average: ${avg.toFixed(2)}ms`, 'info');
            this.log(`  Min: ${min}ms`, 'info');
            this.log(`  Max: ${max}ms`, 'info');
            this.log(`  Requests: ${timings.length}/${requests}`, 'info');

            if (avg < 2000) {
                this.log('✅ Performance looks good!', 'success');
            } else {
                this.log('⚠️ Performance could be better', 'warning');
            }
        }
    }

    async generateReport(results) {
        const reportPath = path.join(process.cwd(), 'ssr-test-report.html');

        const report = `
<!DOCTYPE html>
<html>
<head>
    <title>FindMeRoom SSR Test Report</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; }
        .header { background: #2c2e97; color: white; padding: 20px; border-radius: 5px; }
        .test-result { margin: 10px 0; padding: 10px; border-radius: 5px; }
        .pass { background: #d4edda; border: 1px solid #c3e6cb; color: #155724; }
        .fail { background: #f8d7da; border: 1px solid #f5c6cb; color: #721c24; }
        .error { background: #fff3cd; border: 1px solid #ffeaa7; color: #856404; }
        .summary { background: #f8f9fa; padding: 20px; border-radius: 5px; margin-top: 20px; }
    </style>
</head>
<body>
    <div class="header">
        <h1>🚀 FindMeRoom SSR Test Report</h1>
        <p>Generated on: ${new Date().toISOString()}</p>
    </div>

    <h2>Test Results</h2>
    ${results.map(result => `
        <div class="test-result ${result.passed ? 'pass' : 'fail'}">
            <h3>${result.status} ${result.name}</h3>
            <p><strong>URL:</strong> ${result.url}</p>
            ${result.statusCode ? `<p><strong>Status:</strong> ${result.statusCode}</p>` : ''}
            ${result.error ? `<p><strong>Error:</strong> ${result.error}</p>` : ''}
        </div>
    `).join('')}

    <div class="summary">
        <h3>📊 Summary</h3>
        <p><strong>Total Tests:</strong> ${results.length}</p>
        <p><strong>Passed:</strong> ${results.filter(r => r.passed).length}</p>
        <p><strong>Failed:</strong> ${results.filter(r => !r.passed).length}</p>
        <p><strong>Success Rate:</strong> ${((results.filter(r => r.passed).length / results.length) * 100).toFixed(1)}%</p>
    </div>

    <div class="summary">
        <h3>🔧 Next Steps</h3>
        <ul>
            <li>If all tests pass, your SSR setup is working correctly!</li>
            <li>Test the live application by visiting <code>http://localhost:${TEST_PORT}</code></li>
            <li>Check browser developer tools for any client-side errors</li>
            <li>Test different routes using hash routing (e.g., <code>#/theme/slider-filter-search</code>)</li>
        </ul>
    </div>
</body>
</html>`;

        fs.writeFileSync(reportPath, report);
        this.log(`📊 Test report generated: ${reportPath}`, 'success');
    }

    async cleanup() {
        if (this.server) {
            this.log('Stopping local server...', 'info');
            if (this.isWindows) {
                execSync(`taskkill /PID ${this.server.pid} /T /F`, { stdio: 'ignore' });
            } else {
                this.server.kill('SIGTERM');
            }
            this.server = null;
            this.log('✅ Server stopped', 'success');
        }
    }

    async run() {
        try {
            this.log('🧪 Starting Local SSR Tests for FindMeRoom.com', 'info');
            this.log('=' .repeat(60), 'info');

            // Step 1: Build production version
            const buildSuccess = await this.buildProduction();
            if (!buildSuccess) {
                throw new Error('Build failed');
            }

            // Step 2: Start local server
            await this.startLocalServer();

            // Step 3: Wait for server to be fully ready
            await new Promise(resolve => setTimeout(resolve, 3000));

            // Step 4: Run SSR tests
            const results = await this.testSSRFunctionality();

            // Step 5: Test performance
            await this.testPerformance();

            // Step 6: Generate report
            await this.generateReport(results);

            // Step 7: Show final results
            const passedTests = results.filter(r => r.passed).length;
            const totalTests = results.length;

            this.log('=' .repeat(60), 'info');
            this.log(`📊 Test Results: ${passedTests}/${totalTests} tests passed`, 'info');

            if (passedTests === totalTests) {
                this.log('🎉 All tests passed! Your SSR setup is production-ready!', 'success');
                this.log(`🌐 Visit your local SSR app at: http://localhost:${TEST_PORT}`, 'info');
            } else {
                this.log(`⚠️ ${totalTests - passedTests} tests failed. Check the report for details.`, 'warning');
            }

        } catch (error) {
            this.log(`❌ Test suite failed: ${error.message}`, 'error');
        } finally {
            await this.cleanup();
        }
    }
}

// Handle graceful shutdown
process.on('SIGINT', async () => {
    console.log('\n🛑 Received SIGINT, shutting down gracefully...');
    process.exit(0);
});

process.on('SIGTERM', async () => {
    console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
    process.exit(0);
});

// Run the tests
const tester = new SSRTester();
tester.run();
