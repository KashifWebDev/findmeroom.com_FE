import { Component, input } from "@angular/core";

import { CarouselModule } from "ngx-owl-carousel-o";

import { IBrand } from "../../../../../shared/interface/property";

@Component({
  selector: "app-brand-three",
  imports: [CarouselModule],
  templateUrl: "./brand-three.html",
  styleUrls: ["./brand-three.scss"],
})
export class BrandThree {
  readonly brandData = input<IBrand[]>();

  public Options = {
    loop: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeOut: 500,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      275: {
        items: 2,
      },
      668: {
        items: 4,
      },
      1000: {
        items: 5,
      },
    },
  };
}
