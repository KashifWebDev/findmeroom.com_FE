import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Server },
  { path: 'theme/slider-filter-search', renderMode: RenderMode.Server },
  { path: 'theme', renderMode: RenderMode.Server },
  {
    path: '**',
    renderMode: RenderMode.Server,
  }
];
