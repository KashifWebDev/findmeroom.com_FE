import { Routes } from "@angular/router";

import { CenterSlide } from "./center-slide/center-slide";
import { Creative1 } from "./creative1/creative1";
import { Creative2 } from "./creative2/creative2";
import { Creative3 } from "./creative3/creative3";
import { Creative4 } from "./creative4/creative4";
import { GridTitle2 } from "./grid-title2/grid-title2";
import { GridTitle3 } from "./grid-title3/grid-title3";
import { GridTitle4 } from "./grid-title4/grid-title4";
import { Grid2 } from "./grid2/grid2";
import { Grid3 } from "./grid3/grid3";
import { Grid4 } from "./grid4/grid4";
import { Masonry3 } from "./masonry3/masonry3";
import { Masonry4 } from "./masonry4/masonry4";
import { Parallax } from "./parallax/parallax";
import { PortfolioDetails } from "./portfolio-details/portfolio-details";

export default [
  {
    path: "2-grid",
    component: Grid2,
  },
  {
    path: "3-grid",
    component: Grid3,
  },
  {
    path: "4-grid",
    component: Grid4,
  },
  {
    path: "2-grid-title",
    component: GridTitle2,
  },
  {
    path: "3-grid-title",
    component: GridTitle3,
  },
  {
    path: "4-grid-title",
    component: GridTitle4,
  },
  {
    path: "3-masonry",
    component: Masonry3,
  },
  {
    path: "4-masonry",
    component: Masonry4,
  },
  {
    path: "parallax",
    component: Parallax,
  },
  {
    path: "center-slide",
    component: CenterSlide,
  },
  {
    path: "creative-1",
    component: Creative1,
  },
  {
    path: "creative-2",
    component: Creative2,
  },
  {
    path: "creative-3",
    component: Creative3,
  },
  {
    path: "creative-4",
    component: Creative4,
  },
  {
    path: "details",
    component: PortfolioDetails,
  },
] as Routes;
