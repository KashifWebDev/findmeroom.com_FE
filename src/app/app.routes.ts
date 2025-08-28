import { Routes } from "@angular/router";

import { content } from "./shared/routes/routes";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "theme/slider-filter-search",
    pathMatch: "full",
  },
  {
    path: "",
    loadComponent: () =>
      import("./shared/components/layouts/layout/layout").then((m) => m.Layout),
    children: content,
  },
  {
    path: "**",
    redirectTo: "page/other-pages/404",
    pathMatch: "full",
  },
];
