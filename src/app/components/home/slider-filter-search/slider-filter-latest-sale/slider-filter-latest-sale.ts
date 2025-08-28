import { Component, inject, input } from "@angular/core";

import { PropertyBox } from "../../../../shared/components/common/property-box/property-box";
import { Title } from "../../../../shared/components/ui/title/title";
import { ILatestForSale } from "../../../../shared/interface/property";
import { PropertyService } from "../../../../shared/services/property.service";

@Component({
  selector: "app-slider-filter-latest-sale",
  imports: [Title, PropertyBox],
  templateUrl: "./slider-filter-latest-sale.html",
  styleUrls: ["./slider-filter-latest-sale.scss"],
})
export class SliderFilterLatestSale {
  propertyService = inject(PropertyService);

  readonly type = input<string>("simple");
  readonly tagClass = input<string>();
  readonly titleType = input<string>();

  public title = "slider_filter_search";
  public tag = "Sale";
  public heading = "Latest For Sale";
  public desc =
    "Elegant retreat in Coral Gables setting. This home provides entertaining spaces with kitchen opening";

  public propertyData: ILatestForSale[] = [];

  ngOnInit() {
    this.propertyService.propertyData().subscribe((response) => {
      this.propertyData = response.latestForSale.filter(
        (item) => item.type == this.title,
      );
    });
  }
}
