import { Routes } from "@angular/router";

import { BlogPageCreativeLeftSidebar } from "./blog-page-creative-left-sidebar/blog-page-creative-left-sidebar";
import { BlogPageCreativeNoSidebar } from "./blog-page-creative-no-sidebar/blog-page-creative-no-sidebar";
import { BlogPageCreativeRightSidebar } from "./blog-page-creative-right-sidebar/blog-page-creative-right-sidebar";
import { BlogPageLeftSidebar } from "./blog-page-left-sidebar/blog-page-left-sidebar";
import { BlogPageListLeftSidebar } from "./blog-page-list-left-sidebar/blog-page-list-left-sidebar";
import { BlogPageListNoSidebar } from "./blog-page-list-no-sidebar/blog-page-list-no-sidebar";
import { BlogPageListRightSidebar } from "./blog-page-list-right-sidebar/blog-page-list-right-sidebar";
import { BlogPageMasonryLeftSidebar } from "./blog-page-masonry-left-sidebar/blog-page-masonry-left-sidebar";
import { BlogPageMasonryNoSidebar } from "./blog-page-masonry-no-sidebar/blog-page-masonry-no-sidebar";
import { BlogPageMasonryRightSidebar } from "./blog-page-masonry-right-sidebar/blog-page-masonry-right-sidebar";
import { BlogPageMixGridLeftSidebar } from "./blog-page-mix-grid-left-sidebar/blog-page-mix-grid-left-sidebar";
import { BlogPageMixGridRightSidebar } from "./blog-page-mix-grid-right-sidebar/blog-page-mix-grid-right-sidebar";
import { BlogPageMixListLeftSidebar } from "./blog-page-mix-list-left-sidebar/blog-page-mix-list-left-sidebar";
import { BlogPageMixListRightSidebar } from "./blog-page-mix-list-right-sidebar/blog-page-mix-list-right-sidebar";
import { BlogPageNoSidebar } from "./blog-page-no-sidebar/blog-page-no-sidebar";
import { BlogPageRightSidebar } from "./blog-page-right-sidebar/blog-page-right-sidebar";

export default [
  {
    path: "left-sidebar",
    component: BlogPageLeftSidebar,
  },
  {
    path: "right-sidebar",
    component: BlogPageRightSidebar,
  },
  {
    path: "no-sidebar",
    component: BlogPageNoSidebar,
  },
  {
    path: "creative-left-sidebar",
    component: BlogPageCreativeLeftSidebar,
  },
  {
    path: "creative-right-sidebar",
    component: BlogPageCreativeRightSidebar,
  },
  {
    path: "creative-no-sidebar",
    component: BlogPageCreativeNoSidebar,
  },
  {
    path: "list-left-sidebar",
    component: BlogPageListLeftSidebar,
  },
  {
    path: "list-right-sidebar",
    component: BlogPageListRightSidebar,
  },
  {
    path: "list-no-sidebar",
    component: BlogPageListNoSidebar,
  },
  {
    path: "masonry-left-sidebar",
    component: BlogPageMasonryLeftSidebar,
  },
  {
    path: "masonry-right-sidebar",
    component: BlogPageMasonryRightSidebar,
  },
  {
    path: "masonry-no-sidebar",
    component: BlogPageMasonryNoSidebar,
  },
  {
    path: "mix-list-left-sidebar",
    component: BlogPageMixListLeftSidebar,
  },
  {
    path: "mix-list-right-sidebar",
    component: BlogPageMixListRightSidebar,
  },
  {
    path: "mix-grid-left-sidebar",
    component: BlogPageMixGridLeftSidebar,
  },
  {
    path: "mix-grid-right-sidebar",
    component: BlogPageMixGridRightSidebar,
  },
] as Routes;
