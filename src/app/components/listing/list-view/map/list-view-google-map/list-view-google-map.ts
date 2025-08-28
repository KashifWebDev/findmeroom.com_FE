import { Component, inject } from "@angular/core";
import { GoogleMapsModule } from "@angular/google-maps";

import { CommonFilterListing } from "../../../../../shared/components/common/widgets/common-filter-listing/common-filter-listing";
import { CommonFilterPropertyBox } from "../../../../../shared/components/common/widgets/common-filter-property-box/common-filter-property-box";
import { GridPanel } from "../../../../../shared/components/common/widgets/grid-panel/grid-panel";
import { Breadcrumb } from "../../../../../shared/components/ui/breadcrumb/breadcrumb";
import {
  IMarkersData,
  IPagination,
} from "../../../../../shared/interface/property";
import { PropertyBoxGridService } from "../../../../../shared/services/property-box-grid.service";

@Component({
  selector: "app-list-view-google-map",
  templateUrl: "./list-view-google-map.html",
  styleUrls: ["./list-view-google-map.scss"],
  imports: [
    Breadcrumb,
    GridPanel,
    GoogleMapsModule,
    CommonFilterListing,
    CommonFilterPropertyBox,
  ],
})
export class ListViewGoogleMap {
  private propertyBoxGridService = inject(PropertyBoxGridService);

  public themeLogo = "assets/images/logo/2.png";
  public footerLogo = "assets/images/logo/footer-logo.png";
  public bgImage = "assets/images/inner-background.jpg";
  public title = "Google Map";
  public parent = "Listing";
  public child = "Google Map";

  public listView: boolean = false;
  public markers: IMarkersData[] = [];
  public paginationData: IPagination;
  public totalProperty: number;
  public filterValue: string;

  public theme_default3 = "#ff5c41";
  public theme_default4 = "#ff8c41";

  public mapOptions: google.maps.MapOptions = {
    center: { lat: 25.276987, lng: 55.296249 },
    zoom: 6,
  };

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

    this.markers.push({
      position: {
        lat: 48.8615515,
        lng: 2.3112233,
      },
      label: {
        color: "black",
        text: "Paris",
      },
    });
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
