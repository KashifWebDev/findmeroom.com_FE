import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";
import { RouterModule } from "@angular/router";

import { IBanner } from "../../../../../shared/interface/property";

@Component({
  selector: "app-banner-two",
  imports: [CommonModule, RouterModule],
  templateUrl: "./banner-two.html",
  styleUrls: ["./banner-two.scss"],
})
export class BannerTwo {
  readonly bannerData = input<IBanner>();
  readonly tagClass = input<string>();
}
