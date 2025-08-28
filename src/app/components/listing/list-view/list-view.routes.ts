import { Routes } from "@angular/router";

import { ListViewSlider } from "./list-view-slider/list-view-slider";
import { ListViewThumbnailImage } from "./list-view-thumbnail-image/list-view-thumbnail-image";
import { ListViewVideo } from "./list-view-video/list-view-video";
import { ListingLeftSidebar } from "./listing/listing-left-sidebar/listing-left-sidebar";
import { ListingNoSidebar } from "./listing/listing-no-sidebar/listing-no-sidebar";
import { ListingRightSidebar } from "./listing/listing-right-sidebar/listing-right-sidebar";
import { ListViewGoogleMap } from "./map/list-view-google-map/list-view-google-map";
import { ListViewLeafletMap } from "./map/list-view-leaflet-map/list-view-leaflet-map";

export default [
  {
    path: "listing/left-sidebar",
    component: ListingLeftSidebar,
  },
  {
    path: "listing/right-sidebar",
    component: ListingRightSidebar,
  },
  {
    path: "listing/no-sidebar",
    component: ListingNoSidebar,
  },
  {
    path: "map/google-map",
    component: ListViewGoogleMap,
  },
  {
    path: "map/leaflet-map",
    component: ListViewLeafletMap,
  },
  {
    path: "slider",
    component: ListViewSlider,
  },
  {
    path: "thumbnail-image",
    component: ListViewThumbnailImage,
  },
  {
    path: "video",
    component: ListViewVideo,
  },
] as Routes;
