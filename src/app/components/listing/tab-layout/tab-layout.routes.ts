import { Routes } from "@angular/router";

import { TabFullWidth } from "./tab-full-width/tab-full-width";
import { TabLeftSidebar } from "./tab-left-sidebar/tab-left-sidebar";
import { TabRightSidebar } from "./tab-right-sidebar/tab-right-sidebar";

export default [
  {
    path: "tab-full-width",
    component: TabFullWidth,
  },
  {
    path: "tab-left-sidebar",
    component: TabLeftSidebar,
  },
  {
    path: "tab-right-sidebar",
    component: TabRightSidebar,
  },
] as Routes;
