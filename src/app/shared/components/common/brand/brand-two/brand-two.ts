import { Component, input } from "@angular/core";

import { CarouselModule, OwlOptions } from "ngx-owl-carousel-o";

import { IBrand } from "../../../../../shared/interface/property";

@Component({
  selector: "app-brand-two",
  imports: [CarouselModule],
  templateUrl: "./brand-two.html",
  styleUrls: ["./brand-two.scss"],
})
export class BrandTwo {
  readonly brandData = input<IBrand[]>();

  public Options: OwlOptions = {
    loop: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2,
      },
      457: {
        items: 3,
      },
      668: {
        items: 4,
      },
      1100: {
        items: 5,
      },
      1266: {
        items: 6,
      },
    },
  };
}
