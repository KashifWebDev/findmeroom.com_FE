import { CommonModule } from "@angular/common";
import { Component, inject, input } from "@angular/core";

import { AdvanceFilterBoxHorizontial } from "../../../../../shared/components/common/advance-filter-box-horizontial/advance-filter-box-horizontial";
import { PropertyBox } from "../../../../../shared/components/common/property-box/property-box";
import { GridPanel } from "../../../../../shared/components/common/widgets/grid-panel/grid-panel";
import { ILatestForRent } from "../../../../../shared/interface/property";
import { PropertyService } from "../../../../../shared/services/property.service";

@Component({
  selector: "app-common-tab-property-box",
  templateUrl: "./common-tab-property-box.html",
  styleUrls: ["./common-tab-property-box.scss"],
  imports: [GridPanel, AdvanceFilterBoxHorizontial, PropertyBox, CommonModule],
})
export class CommonTabPropertyBox {
  private propertyService = inject(PropertyService);

  readonly advanceFilter = input<boolean>();
  readonly colClass = input<boolean>(false);

  public tabValue: string;

  public propertyData: ILatestForRent[];
  public latestForRentData: ILatestForRent[];

  constructor() {
    this.propertyService.latestForRentData().subscribe((response) => {
      this.latestForRentData = response.latestForRent.filter(
        (item) => item.labels,
      );
    });

    this.propertyService.latestForRentData().subscribe((response) => {
      this.propertyData = response.latestForRent.filter((item) => item.labels);
    });
  }

  receiveChildData(value: string) {
    if (value == "") {
      this.propertyData = this.latestForRentData?.filter((data) => {
        return data.labels;
      });
    } else {
      this.propertyData = this.latestForRentData?.filter((data) => {
        return data.labels.includes(value);
      });
    }
  }
}
