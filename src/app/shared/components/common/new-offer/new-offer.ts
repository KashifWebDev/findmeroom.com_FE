import { Component, inject, input } from "@angular/core";

import { CarouselModule } from "ngx-owl-carousel-o";

import { INewOffer } from "../../../interface/property";
import { PropertyService } from "../../../services/property.service";

@Component({
  selector: "app-new-offer",
  imports: [CarouselModule],
  templateUrl: "./new-offer.html",
  styleUrls: ["./new-offer.scss"],
})
export class NewOffer {
  private propertyService = inject(PropertyService);

  readonly title = input<string>("");

  public newOfferData: INewOffer[] = [];

  public Options = {
    loop: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      1024: {
        items: 2,
      },
    },
  };

  ngOnInit() {
    this.propertyService.newOfferData().subscribe((response) => {
      this.newOfferData = response.newOffer.filter((item) =>
        item.type.includes(this.title()),
      );
    });
  }
}
