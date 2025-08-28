import { CommonModule } from "@angular/common";
import { Component, inject, input } from "@angular/core";

import { AngularSvgIconModule } from "angular-svg-icon";
import { CarouselModule } from "ngx-owl-carousel-o";

import {
  ICurrency,
  IPricingPlan,
} from "../../../../../shared/interface/property";
import { PropertyService } from "../../../../../shared/services/property.service";
import { CurrencySymbolPipe } from "../../../../pipe/currency-symbol.pipe";

@Component({
  selector: "app-pricing-plan-one",
  imports: [
    CarouselModule,
    AngularSvgIconModule,
    CurrencySymbolPipe,
    CommonModule,
  ],
  templateUrl: "./pricing-plan-one.html",
  styleUrls: ["./pricing-plan-one.scss"],
})
export class PricingPlanOne {
  propertyService = inject(PropertyService);

  readonly pricingPlan = input<IPricingPlan[]>([]);
  readonly tagClass = input<string>();
  readonly currency = input<ICurrency>();

  public Options = {
    loop: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      668: {
        items: 2,
      },
      1240: {
        items: 3,
      },
    },
  };
}
