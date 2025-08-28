import { Routes } from "@angular/router";

import { PropertyImageBox } from "./property-image-box/property-image-box";
import { PropertyImageSlider } from "./property-image-slider/property-image-slider";
import { PropertyInfoTab } from "./property-info-tab/property-info-tab";
import { PropertyLeftSidebar } from "./property-left-sidebar/property-left-sidebar";
import { PropertyModalDetails } from "./property-modal-details/property-modal-details";
import { PropertyTemplateBreadcrumb } from "./property-template-breadcrumb/property-template-breadcrumb";
import { PropertyThumbnailImages } from "./property-thumbnail-images/property-thumbnail-images";
import { StickyTab } from "./sticky-tab/sticky-tab";
import { WithoutTop } from "./without-top/without-top";

export default [
  {
    path: "sticky-tab",
    component: StickyTab,
  },
  {
    path: "without-top",
    component: WithoutTop,
  },
  {
    path: "left-sidebar",
    component: PropertyLeftSidebar,
  },
  {
    path: "info-tab",
    component: PropertyInfoTab,
  },
  {
    path: "image-slider",
    component: PropertyImageSlider,
  },
  {
    path: "thumbnail-image",
    component: PropertyThumbnailImages,
  },
  {
    path: "image-box",
    component: PropertyImageBox,
  },
  {
    path: "template-breadcrumb",
    component: PropertyTemplateBreadcrumb,
  },
  {
    path: "modal-details",
    component: PropertyModalDetails,
  },
] as Routes;
