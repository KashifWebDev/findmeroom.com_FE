import { CommonModule } from "@angular/common";
import { Component, inject, input } from "@angular/core";
import { RouterModule } from "@angular/router";

import { CarouselModule } from "ngx-owl-carousel-o";

import {
  ICurrency,
  IFeaturedProperty,
} from "../../../../../shared/interface/property";
import { PropertyService } from "../../../../../shared/services/property.service";
import { CurrencySymbolPipe } from "../../../../pipe/currency-symbol.pipe";
import { FeatherIcons } from "../../../ui/feather-icons/feather-icons";

@Component({
  selector: "app-featured-property-one",
  imports: [
    CarouselModule,
    RouterModule,
    FeatherIcons,
    CommonModule,
    CurrencySymbolPipe,
  ],
  templateUrl: "./featured-property-one.html",
  styleUrls: ["./featured-property-one.scss"],
})
export class FeaturedPropertyOne {
  propertyService = inject(PropertyService);

  readonly title = input<string>("");
  readonly featuredProperty = input<IFeaturedProperty[]>();
  readonly tagClass = input<string>("");
  readonly currency = input<ICurrency>(this.propertyService.Currency);

  public Options = {
    items: 1,
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
