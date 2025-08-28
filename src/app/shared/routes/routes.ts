import { Routes } from "@angular/router";

export const content: Routes = [
  {
    path: "theme",
    loadChildren: () => import("../../components/home/home.routes"),
  },
];
