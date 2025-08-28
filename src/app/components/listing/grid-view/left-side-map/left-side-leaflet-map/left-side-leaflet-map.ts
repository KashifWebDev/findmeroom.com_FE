import { Component, inject } from "@angular/core";

import { CommonFilterListing } from "../../../../../shared/components/common/widgets/common-filter-listing/common-filter-listing";
import { CommonFilterPropertyBox } from "../../../../../shared/components/common/widgets/common-filter-property-box/common-filter-property-box";
import { CommonLeafletMap } from "../../../../../shared/components/common/widgets/common-leaflet-map/common-leaflet-map";
import { GridPanel } from "../../../../../shared/components/common/widgets/grid-panel/grid-panel";
import { Breadcrumb } from "../../../../../shared/components/ui/breadcrumb/breadcrumb";
import { IPagination } from "../../../../../shared/interface/property";
import { PropertyBoxGridService } from "../../../../../shared/services/property-box-grid.service";

@Component({
  selector: "app-left-side-leaflet-map",
  templateUrl: "./left-side-leaflet-map.html",
  styleUrls: ["./left-side-leaflet-map.scss"],
  imports: [
    Breadcrumb,
    GridPanel,
    CommonFilterListing,
    CommonLeafletMap,
    CommonFilterPropertyBox,
  ],
})
export class LeftSideLeafletMap {
  private propertyBoxGridService = inject(PropertyBoxGridService);

  public themeLogo = "assets/images/logo/2.png";
  public footerLogo = "assets/images/logo/footer-logo.png";
  public bgImage = "assets/images/inner-background.jpg";
  public title = "Leaflet Map";
  public parent = "Listing";
  public child = "Leaflet Map";

  public listView: boolean = false;
  public categoryValue: string;
  public paginationData: IPagination;
  public totalProperty: number;
  public filterValue: string;

  public theme_default3 = "#ff5c41";
  public theme_default4 = "#ff8c41";

  ngOnInit() {
    document.documentElement.style.setProperty(
      "--theme-default",
      this.theme_default3,
    );
    document.documentElement.style.setProperty(
      "--theme-default3",
      this.theme_default3,
    );
    document.documentElement.style.setProperty(
      "--theme-default4",
      this.theme_default4,
    );
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty("--theme-default");
    document.documentElement.style.removeProperty("--theme-default3");
    document.documentElement.style.removeProperty("--theme-default4");
  }

  ngDoCheck() {
    this.listView = this.propertyBoxGridService.listView;
  }

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
