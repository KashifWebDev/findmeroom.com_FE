import { Component, input } from "@angular/core";

import { CarouselModule } from "ngx-owl-carousel-o";

import { IHomeSectionSlider } from "../../../../../shared/interface/property";

@Component({
  selector: "app-slider-one",
  imports: [CarouselModule],
  templateUrl: "./slider-one.html",
  styleUrls: ["./slider-one.scss"],
})
export class SliderOne {
  readonly homeSectionSliderData = input<IHomeSectionSlider[]>([]);

  public Options = {
    loop: true,
    nav: true,
    dots: false,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
    },
  };
}
