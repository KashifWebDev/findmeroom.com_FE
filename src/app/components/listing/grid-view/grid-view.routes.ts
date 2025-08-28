import { Routes } from "@angular/router";

import { Grid2LeftSidebar } from "./2-grid/grid2-left-sidebar/grid2-left-sidebar";
import { Grid2NoSidebar } from "./2-grid/grid2-no-sidebar/grid2-no-sidebar";
import { Grid2RightSidebar } from "./2-grid/grid2-right-sidebar/grid2-right-sidebar";
import { Grid3LeftSidebar } from "./3-grid/grid3-left-sidebar/grid3-left-sidebar";
import { Grid3NoSidebar } from "./3-grid/grid3-no-sidebar/grid3-no-sidebar";
import { Grid3RightSidebar } from "./3-grid/grid3-right-sidebar/grid3-right-sidebar";
import { LeftSideGoogleMap } from "./left-side-map/left-side-google-map/left-side-google-map";
import { LeftSideLeafletMap } from "./left-side-map/left-side-leaflet-map/left-side-leaflet-map";
import { GoogleMap } from "./map/google-map/google-map";
import { LeafletMap } from "./map/leaflet-map/leaflet-map";
import { MapHeaderGoogleMap } from "./map-header/map-header-google-map/map-header-google-map";
import { MapHeaderLeafletMap } from "./map-header/map-header-leaflet-map/map-header-leaflet-map";
import { GoogleMapModal } from "./map-modal/google-map-modal/google-map-modal";
import { LeafletMapModal } from "./map-modal/leaflet-map-modal/leaflet-map-modal";
import { OnClickGoogleMap } from "./on-click-map/on-click-google-map/on-click-google-map";
import { OnClickLeafletMap } from "./on-click-map/on-click-leaflet-map/on-click-leaflet-map";
import { Slider } from "./slider/slider";

export default [
  {
    path: "2-grid/left-sidebar",
    component: Grid2LeftSidebar,
  },
  {
    path: "2-grid/right-sidebar",
    component: Grid2RightSidebar,
  },
  {
    path: "2-grid/no-sidebar",
    component: Grid2NoSidebar,
  },
  {
    path: "3-grid/left-sidebar",
    component: Grid3LeftSidebar,
  },
  {
    path: "3-grid/right-sidebar",
    component: Grid3RightSidebar,
  },
  {
    path: "3-grid/no-sidebar",
    component: Grid3NoSidebar,
  },
  {
    path: "slider",
    component: Slider,
  },
  {
    path: "map/google-map",
    component: GoogleMap,
  },
  {
    path: "map/leaflet-map",
    component: LeafletMap,
  },
  {
    path: "map-modal/google-map",
    component: GoogleMapModal,
  },
  {
    path: "map-modal/leaflet-map",
    component: LeafletMapModal,
  },
  {
    path: "left-side-map/google-map",
    component: LeftSideGoogleMap,
  },
  {
    path: "left-side-map/leaflet-map",
    component: LeftSideLeafletMap,
  },
  {
    path: "on-click-map/google-map",
    component: OnClickGoogleMap,
  },
  {
    path: "on-click-map/leaflet-map",
    component: OnClickLeafletMap,
  },
  {
    path: "map-header/google-map",
    component: MapHeaderGoogleMap,
  },
  {
    path: "map-header/leaflet-map",
    component: MapHeaderLeafletMap,
  },
] as Routes;
