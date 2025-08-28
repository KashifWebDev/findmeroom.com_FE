import { Component, inject, input } from "@angular/core";
import { RouterModule } from "@angular/router";

import { CarouselModule } from "ngx-owl-carousel-o";

import { IPropertyOfDay } from "../../../../shared/interface/property";
import { PropertyService } from "../../../../shared/services/property.service";
import { CurrencySymbolPipe } from "../../../pipe/currency-symbol.pipe";

@Component({
  selector: "app-property-of-day",
  imports: [CarouselModule, RouterModule, CurrencySymbolPipe],
  templateUrl: "./property-of-day.html",
  styleUrls: ["./property-of-day.scss"],
})
export class PropertyOfDay {
  propertyService = inject(PropertyService);

  readonly propertyOfDay = input<IPropertyOfDay[]>();

  public Options = {
    loop: true,
    nav: true,
    dots: true,
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
