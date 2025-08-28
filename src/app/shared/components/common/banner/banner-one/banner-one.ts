import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";
import { RouterModule } from "@angular/router";

import { IBanner } from "../../../../../shared/interface/property";

@Component({
  selector: "app-banner-one",
  imports: [CommonModule, RouterModule],
  templateUrl: "./banner-one.html",
  styleUrls: ["./banner-one.scss"],
})
export class BannerOne {
  readonly bannerData = input<IBanner>();
  readonly tagClass = input<string>("");
  readonly buttonClass = input<string>();
}
