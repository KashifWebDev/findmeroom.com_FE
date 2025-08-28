import { Routes } from "@angular/router";

import { ContactUs1 } from "./contact-us1/contact-us1";
import { ContactUs2 } from "./contact-us2/contact-us2";
import { ContactUs3 } from "./contact-us3/contact-us3";

export default [
  {
    path: "contact-1",
    component: ContactUs1,
  },
  {
    path: "contact-2",
    component: ContactUs2,
  },
  {
    path: "contact-3",
    component: ContactUs3,
  },
] as Routes;
