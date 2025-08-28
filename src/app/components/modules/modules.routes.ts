import { Routes } from "@angular/router";

import { ModulesAbout } from "./modules-about/modules-about";
import { ModulesBlog } from "./modules-blog/modules-blog";
import { ModulesBrand } from "./modules-brand/modules-brand";
import { ModulesButton } from "./modules-button/modules-button";
import { ModulesFeature } from "./modules-feature/modules-feature";
import { ModulesFooter } from "./modules-footer/modules-footer";
import { ModulesFullBanner } from "./modules-full-banner/modules-full-banner";
import { ModulesImageRatio } from "./modules-image-ratio/modules-image-ratio";
import { ModulesLabel } from "./modules-label/modules-label";
import { ModulesOthers } from "./modules-others/modules-others";
import { ModulesProperty } from "./modules-property/modules-property";
import { ModulesService } from "./modules-service/modules-service";
import { ModulesTestimonial } from "./modules-testimonial/modules-testimonial";
import { ModulesTitle } from "./modules-title/modules-title";

export default [
  {
    path: "button",
    component: ModulesButton,
  },
  {
    path: "label",
    component: ModulesLabel,
  },
  {
    path: "title",
    component: ModulesTitle,
  },
  {
    path: "image-ratio",
    component: ModulesImageRatio,
  },
  {
    path: "footer",
    component: ModulesFooter,
  },
  {
    path: "blog",
    component: ModulesBlog,
  },
  {
    path: "brand",
    component: ModulesBrand,
  },
  {
    path: "testimonial",
    component: ModulesTestimonial,
  },
  {
    path: "full-banner",
    component: ModulesFullBanner,
  },
  {
    path: "about",
    component: ModulesAbout,
  },
  {
    path: "service",
    component: ModulesService,
  },
  {
    path: "property",
    component: ModulesProperty,
  },
  {
    path: "feature",
    component: ModulesFeature,
  },
  {
    path: "others",
    component: ModulesOthers,
  },
] as Routes;
