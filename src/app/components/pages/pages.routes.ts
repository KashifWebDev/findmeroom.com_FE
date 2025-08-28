import { Routes } from "@angular/router";

export default [
  {
    path: "portfolio",
    loadChildren: () => import("./portfolio/portfolio.routes"),
  },
  {
    path: "blog-page",
    loadChildren: () => import("./blog-page/blog.routes"),
  },
  {
    path: "blog-detail",
    loadChildren: () => import("./blog-details/blog-details.routes"),
  },
  {
    path: "breadcrumb",
    loadChildren: () =>
      import("./element-breadcrumb/element-breadcrumb.routes"),
  },
  {
    path: "agency",
    loadChildren: () => import("./agency/agency.routes"),
  },
  {
    path: "user",
    loadChildren: () => import("./user-panel/user-panel.routes"),
  },
  {
    path: "other-pages",
    loadChildren: () => import("./other-pages/other-pages.routes"),
  },
] as Routes;
