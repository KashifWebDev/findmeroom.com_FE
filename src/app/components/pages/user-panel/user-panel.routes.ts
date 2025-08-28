import { Routes } from "@angular/router";

import { CardsPayment } from "./cards-payment/cards-payment";
import { CompareProperty } from "./compare-property/compare-property";
import { CreateProperty } from "./create-property/create-property";
import { Favourites } from "./favourites/favourites";
import { MyListing } from "./my-listing/my-listing";
import { MyProfile } from "./my-profile/my-profile";
import { Privacy } from "./privacy/privacy";
import { UserDashboard } from "./user-dashboard/user-dashboard";

export default [
  {
    path: "user-dashboard",
    component: UserDashboard,
  },
  {
    path: "my-listing",
    component: MyListing,
  },
  {
    path: "create-property",
    component: CreateProperty,
  },
  {
    path: "my-profile",
    component: MyProfile,
  },
  {
    path: "favourite",
    component: Favourites,
  },
  {
    path: "compare-property",
    component: CompareProperty,
  },
  {
    path: "cards-payment",
    component: CardsPayment,
  },
  {
    path: "privacy",
    component: Privacy,
  },
] as Routes;
