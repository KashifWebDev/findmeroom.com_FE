import { CommonModule } from "@angular/common";
import { Component, inject, input } from "@angular/core";

import { IPagination } from "../../../../../shared/interface/property";
import { PropertyService } from "../../../../../shared/services/property.service";
import { CommonFilterListing } from "../common-filter-listing/common-filter-listing";
import { CommonFilterPropertyBox } from "../common-filter-property-box/common-filter-property-box";
import { GridPanel } from "../grid-panel/grid-panel";

@Component({
  selector: "app-common-property-filter-listing",
  imports: [
    GridPanel,
    CommonFilterListing,
    CommonFilterPropertyBox,
    CommonModule,
  ],
  templateUrl: "./common-property-filter-listing.html",
  styleUrls: ["./common-property-filter-listing.scss"],
})
export class CommonPropertyFilterListing {
  propertyService = inject(PropertyService);

  readonly listView = input<boolean>();
  readonly filterStyle = input<string>();
  readonly gridClass = input<string>();
  readonly gridType = input<string>();
  readonly filter = input<boolean>();
  readonly gridImages = input<boolean>();
  readonly sidebarType = input<string>();
  readonly mapButton = input<boolean>();
  readonly mapType = input<string>();
  readonly viewMap = input<boolean>();
  readonly isList = input<boolean>();
  readonly thumbnail = input<boolean>();
  readonly thumbnail_video = input<boolean>();
  readonly grid = input<boolean>(true);

  public categoryValue: string;
  public paginationData: IPagination;
  public totalProperty: number;
  public filterValue: string;

  receivePropertyTotalData(value: number) {
    this.totalProperty = value;
  }

  getPaginationData(pagination: IPagination) {
    this.paginationData = pagination;
  }

  sortFilter(value: string) {
    this.filterValue = value;
  }
}
