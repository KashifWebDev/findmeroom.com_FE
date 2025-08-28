import { Component, inject } from "@angular/core";

import { MapHSearchHomeSection } from "./map-h-search-home-section/map-h-search-home-section";
import { ILatestForRent } from "../../../shared/interface/property";
import { PropertyService } from "../../../shared/services/property.service";
import { ClassicAgents } from "../classic/classic-agents/classic-agents";
import { ClassicBanner } from "../classic/classic-banner/classic-banner";
import { ClassicBrand } from "../classic/classic-brand/classic-brand";
import { ClassicFeaturedProperty } from "../classic/classic-featured-property/classic-featured-property";
import { ClassicHappyClient } from "../classic/classic-happy-client/classic-happy-client";
import { ClassicLatestProperty } from "../classic/classic-latest-property/classic-latest-property";
import { ClassicPropertyListing } from "../classic/classic-property-listing/classic-property-listing";
import { ClassicPropertyService } from "../classic/classic-property-service/classic-property-service";
import { ClassicVideo } from "../classic/classic-video/classic-video";
import { SearchProperty } from "./widges/search-property/search-property";

@Component({
  selector: "app-map-h-search",
  templateUrl: "./map-h-search.html",
  styleUrls: ["./map-h-search.scss"],
  imports: [
    ClassicLatestProperty,
    ClassicFeaturedProperty,
    ClassicPropertyService,
    ClassicPropertyListing,
    ClassicVideo,
    ClassicAgents,
    MapHSearchHomeSection,
    ClassicBanner,
    ClassicHappyClient,
    ClassicBrand,
    SearchProperty,
  ],
})
export class MapHSearch {
  private propertyService = inject(PropertyService);

  public themeLogo = "assets/images/logo/4.png";
  public darkThemeLogo = "assets/images/logo/9.png";
  public title = "classic";

  public latestPropertyData: ILatestForRent[] = [];

  public theme_default6 = "#f35d43";
  public theme_default7 = "#f34451";

  ngOnInit() {
    document.documentElement.style.setProperty(
      "--theme-default",
      this.theme_default6,
    );
    document.documentElement.style.setProperty(
      "--theme-default6",
      this.theme_default6,
    );
    document.documentElement.style.setProperty(
      "--theme-default7",
      this.theme_default7,
    );

    this.propertyService.latestForRentData().subscribe((response) => {
      this.latestPropertyData = response.latestForRent.filter((item) =>
        item.type.includes(this.title),
      );
    });
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty("--theme-default6");
    document.documentElement.style.removeProperty("--theme-default6");
    document.documentElement.style.removeProperty("--theme-default7");
  }
}
