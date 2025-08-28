import { Component, input } from "@angular/core";

import { CarouselModule } from "ngx-owl-carousel-o";

import { IHomeSectionSlider } from "../../../../../shared/interface/property";

@Component({
  selector: "app-slider-four",
  imports: [CarouselModule],
  templateUrl: "./slider-four.html",
  styleUrls: ["./slider-four.scss"],
})
export class SliderFour {
  readonly homeSectionSliderData = input<IHomeSectionSlider[]>();

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
