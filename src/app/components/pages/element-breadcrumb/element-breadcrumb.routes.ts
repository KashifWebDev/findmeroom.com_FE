import { Routes } from "@angular/router";

import { BreadcrumbRight } from "./breadcrumb-right/breadcrumb-right";
import { ImageWithEffect } from "./image-with-effect/image-with-effect";
import { Grid2LeftSidebar } from "../../listing/grid-view/2-grid/grid2-left-sidebar/grid2-left-sidebar";
import { ListViewGoogleMap } from "../../listing/list-view/map/list-view-google-map/list-view-google-map";
import { ListViewLeafletMap } from "../../listing/list-view/map/list-view-leaflet-map/list-view-leaflet-map";
import { StickyTab } from "../../property/sticky-tab/sticky-tab";

export default [
  {
    path: "basic",
    component: Grid2LeftSidebar,
  },
  {
    path: "image-with-effect",
    component: ImageWithEffect,
  },
  {
    path: "right-content",
    component: BreadcrumbRight,
  },
  {
    path: "only-image",
    component: StickyTab,
  },
  {
    path: "small",
    component: ListViewLeafletMap,
  },
  {
    path: "gradient",
    component: ListViewGoogleMap,
  },
] as Routes;
