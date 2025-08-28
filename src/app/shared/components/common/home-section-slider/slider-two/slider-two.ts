import { Component, input } from "@angular/core";
import { RouterModule } from "@angular/router";

import { CarouselModule } from "ngx-owl-carousel-o";

import { IHomeSectionSlider } from "../../../../../shared/interface/property";

@Component({
  selector: "app-slider-two",
  imports: [CarouselModule, RouterModule],
  templateUrl: "./slider-two.html",
  styleUrls: ["./slider-two.scss"],
})
export class SliderTwo {
  readonly homeSectionSliderData = input<IHomeSectionSlider[]>([]);

  public Options = {
    loop: true,
    nav: true,
    dots: false,
    navText: [
      "<i class='fa fa-arrow-left'></i>",
      "<i class='fa fa-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
    },
  };
}
