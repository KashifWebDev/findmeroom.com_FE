import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { FeatherIcons } from "../../../ui/feather-icons/feather-icons";

@Component({
  selector: "app-wishlist",
  imports: [FeatherIcons, RouterModule],
  templateUrl: "./wishlist.html",
  styleUrls: ["./wishlist.scss"],
})
export class Wishlist {}
