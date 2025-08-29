import { Routes } from "@angular/router";

import { content } from "./shared/routes/routes";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./shared/components/layouts/layout/layout").then((m) => m.Layout),
    children: [
      {
        path: "",
        loadComponent: () =>
          import("./components/home/slider-filter-search/slider-filter-search").then((m) => m.SliderFilterSearch),
      },
      ...content,
    ],
  },
  {
    path: "**",
    redirectTo: "page/other-pages/404",
    pathMatch: "full",
  },
];
