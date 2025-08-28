import { Component, input } from "@angular/core";

import { CarouselModule } from "ngx-owl-carousel-o";

import { IBrand } from "../../../../../shared/interface/property";

@Component({
  selector: "app-brand-one",
  imports: [CarouselModule],
  templateUrl: "./brand-one.html",
  styleUrls: ["./brand-one.scss"],
})
export class BrandOne {
  readonly brandData = input<IBrand[]>();

  public Options = {
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
      999: {
        items: 5,
      },
    },
  };
}
