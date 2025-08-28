import { CommonModule } from "@angular/common";
import { Component, inject, input } from "@angular/core";

import { PropertyBox } from "../../../../shared/components/common/property-box/property-box";
import { ILatestForRent } from "../../../../shared/interface/property";
import { PropertyService } from "../../../../shared/services/property.service";

@Component({
  selector: "app-related-property",
  imports: [PropertyBox, CommonModule],
  templateUrl: "./related-property.html",
  styleUrls: ["./related-property.scss"],
})
export class RelatedProperty {
  private propertyService = inject(PropertyService);

  readonly type = input<string>();
  readonly totalData = input<number>();

  public latestForRentData: ILatestForRent[] = [];

  ngOnInit() {
    this.propertyService.latestForRentData().subscribe((response) => {
      this.latestForRentData = response.latestForRent.filter((item) =>
        item.type.includes("slider_filter_search"),
      );
    });
  }
}
