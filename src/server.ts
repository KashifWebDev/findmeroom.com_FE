import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { join } from 'node:path';

const app = express();
const angularApp = new AngularNodeAppEngine();

// Serve static files from the browser build (in prod builds)
const browserDistFolder = join(import.meta.dirname, '../browser');
app.use(express.static(browserDistFolder, {
  maxAge: '1y',
  index: false,
  redirect: false,
}));

// Let Angular handle everything else — no path string, catches all routes
app.use((req, res, next) => {
  angularApp.handle(req)
    .then(response => response ? writeResponseToNodeResponse(response, res) : next())
    .catch(next);
});

// Start server when executed directly (prod)
if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server listening on http://localhost:${port}`);
  });
}

// Handler used by the Angular CLI in dev
export const reqHandler = createNodeRequestHandler(app);
