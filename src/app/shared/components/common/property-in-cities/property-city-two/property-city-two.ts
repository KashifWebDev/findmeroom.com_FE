import { Component, input } from "@angular/core";

import { CarouselModule } from "ngx-owl-carousel-o";

import { IPropertyInCity } from "../../../../../shared/interface/property";

@Component({
  selector: "app-property-city-two",
  imports: [CarouselModule],
  templateUrl: "./property-city-two.html",
  styleUrls: ["./property-city-two.scss"],
})
export class PropertyCityTwo {
  readonly propertyInCity = input<IPropertyInCity[]>();

  public Options = {
    loop: true,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      475: {
        items: 2,
      },
      568: {
        items: 3,
      },
      1100: {
        items: 4,
      },
      1300: {
        items: 5,
      },
    },
  };
}
