import { Component, input } from "@angular/core";

import { IBanner } from "../../../../../shared/interface/property";

@Component({
  selector: "app-banner-three",
  imports: [],
  templateUrl: "./banner-three.html",
  styleUrls: ["./banner-three.scss"],
})
export class BannerThree {
  readonly bannerData = input<IBanner>();
}
