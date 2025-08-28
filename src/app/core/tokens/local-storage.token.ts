import { InjectionToken, inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from '@angular/common';

class InMemoryStorage implements Storage {
  private map = new Map<string, string>();
  get length() { return this.map.size; }
  clear() { this.map.clear(); }
  getItem(key: string) { return this.map.has(key) ? this.map.get(key)! : null; }
  key(index: number) { return Array.from(this.map.keys())[index] ?? null; }
  removeItem(key: string) { this.map.delete(key); }
  setItem(key: string, value: string) { this.map.set(key, String(value)); }
}

export const LOCAL_STORAGE = new InjectionToken<Storage>('LOCAL_STORAGE', {
  providedIn: 'root',
  factory: () => {
    const pid = inject(PLATFORM_ID);
    return isPlatformBrowser(pid) ? window.localStorage : new InMemoryStorage();
  }
});
