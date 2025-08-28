import { Component, input } from "@angular/core";

import { IBanner } from "../../../../../shared/interface/property";

@Component({
  selector: "app-banner-four",
  imports: [],
  templateUrl: "./banner-four.html",
  styleUrls: ["./banner-four.scss"],
})
export class BannerFour {
  readonly bannerData = input<IBanner>();
}
