import { Component, input } from "@angular/core";

import { BannerFour } from "./banner-four/banner-four";
import { BannerOne } from "./banner-one/banner-one";
import { BannerThree } from "./banner-three/banner-three";
import { BannerTwo } from "./banner-two/banner-two";
import { IBanner } from "../../../../shared/interface/property";

@Component({
  selector: "app-banner",
  imports: [BannerOne, BannerTwo, BannerThree, BannerFour],
  templateUrl: "./banner.html",
  styleUrls: ["./banner.scss"],
})
export class Banner {
  readonly bannerData = input<IBanner>();
  readonly type = input<string>("");
  readonly tagClass = input<string>("");
  readonly buttonClass = input<string>();
}
