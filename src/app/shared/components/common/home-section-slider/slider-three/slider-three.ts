import { Component, inject, input } from "@angular/core";
import { RouterModule } from "@angular/router";

import { CarouselModule } from "ngx-owl-carousel-o";

import { IHomeSectionSlider } from "../../../../../shared/interface/property";
import { PropertyService } from "../../../../../shared/services/property.service";
import { CurrencySymbolPipe } from "../../../../pipe/currency-symbol.pipe";

@Component({
  selector: "app-slider-three",
  imports: [CarouselModule, RouterModule, CurrencySymbolPipe],
  templateUrl: "./slider-three.html",
  styleUrls: ["./slider-three.scss"],
})
export class SliderThree {
  propertyService = inject(PropertyService);

  readonly homeSectionSliderData = input<IHomeSectionSlider[]>();

  public Options = {
    items: 1,
    loop: true,
    nav: true,
    dots: false,
    navText: [
      "<i class='fa fa-arrow-left'></i>",
      "<i class='fa fa-arrow-right'></i>",
    ],
  };
}
