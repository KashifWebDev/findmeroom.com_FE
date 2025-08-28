import { Routes } from "@angular/router";

import { AgencyGrid } from "./agency-grid/agency-grid";
import { AgencyList } from "./agency-list/agency-list";
import { AgencyProfile } from "./agency-profile/agency-profile";

export default [
  {
    path: "agency-profile",
    component: AgencyProfile,
  },
  {
    path: "agency-grid",
    component: AgencyGrid,
  },
  {
    path: "agency-list",
    component: AgencyList,
  },
] as Routes;
