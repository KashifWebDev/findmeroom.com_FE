import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";

import { CarouselModule } from "ngx-owl-carousel-o";

import { CommonPropertyBox } from "./common-property-box/common-property-box";
import { ILatestForRent } from "../../../../../shared/interface/property";

@Component({
  selector: "app-property-box-four",
  imports: [CarouselModule, CommonPropertyBox, CommonModule],
  templateUrl: "./property-box-four.html",
  styleUrls: ["./property-box-four.scss"],
})
export class PropertyBoxFour {
  readonly latestPropertyData = input<ILatestForRent[]>();
  readonly propertyListingDataClassic = input<ILatestForRent>();
  readonly carousel = input<boolean>(false);

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
      900: {
        items: 2,
      },
      1100: {
        items: 3,
      },
    },
  };
}
