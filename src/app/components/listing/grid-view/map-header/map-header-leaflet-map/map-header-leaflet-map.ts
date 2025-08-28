import { Component } from "@angular/core";

import { CommonLeafletMap } from "../../../../../shared/components/common/widgets/common-leaflet-map/common-leaflet-map";
import { CommonPropertyFilterListing } from "../../../../../shared/components/common/widgets/common-property-filter-listing/common-property-filter-listing";

@Component({
  selector: "app-map-header-leaflet-map",
  templateUrl: "./map-header-leaflet-map.html",
  styleUrls: ["./map-header-leaflet-map.scss"],
  imports: [CommonLeafletMap, CommonPropertyFilterListing],
})
export class MapHeaderLeafletMap {
  public themeLogo = "assets/images/logo/2.png";
  public footerLogo = "assets/images/logo/footer-logo.png";

  public listView: boolean = false;

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
}
