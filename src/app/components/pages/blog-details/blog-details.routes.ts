import { Routes } from "@angular/router";

import { BlogDetailsLeftSidebar } from "./blog-details-left-sidebar/blog-details-left-sidebar";
import { BlogDetailsNoSidebar } from "./blog-details-no-sidebar/blog-details-no-sidebar";
import { BlogDetailsRightSidebar } from "./blog-details-right-sidebar/blog-details-right-sidebar";
import { BlogDetailsWithGallery } from "./blog-details-with-gallery/blog-details-with-gallery";
import { BlogDetailsWithVideo } from "./blog-details-with-video/blog-details-with-video";

export default [
  {
    path: "left-sidebar",
    component: BlogDetailsLeftSidebar,
  },
  {
    path: "right-sidebar",
    component: BlogDetailsRightSidebar,
  },
  {
    path: "no-sidebar",
    component: BlogDetailsNoSidebar,
  },
  {
    path: "detail-with-gallery",
    component: BlogDetailsWithGallery,
  },
  {
    path: "detail-with-video",
    component: BlogDetailsWithVideo,
  },
] as Routes;
