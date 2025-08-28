import { Component, inject } from "@angular/core";

import { ClassicAgents } from "./classic-agents/classic-agents";
import { ClassicBanner } from "./classic-banner/classic-banner";
import { ClassicBrand } from "./classic-brand/classic-brand";
import { ClassicFeaturedProperty } from "./classic-featured-property/classic-featured-property";
import { ClassicHappyClient } from "./classic-happy-client/classic-happy-client";
import { ClassicHomeSection } from "./classic-home-section/classic-home-section";
import { ClassicLatestProperty } from "./classic-latest-property/classic-latest-property";
import { ClassicPropertyListing } from "./classic-property-listing/classic-property-listing";
import { ClassicPropertyService } from "./classic-property-service/classic-property-service";
import { ClassicVideo } from "./classic-video/classic-video";
import { ILatestForRent } from "../../../shared/interface/property";
import { PropertyService } from "../../../shared/services/property.service";

@Component({
  selector: "app-classic",
  imports: [
    ClassicHomeSection,
    ClassicLatestProperty,
    ClassicFeaturedProperty,
    ClassicPropertyService,
    ClassicBanner,
    ClassicAgents,
    ClassicVideo,
    ClassicHappyClient,
    ClassicBrand,
    ClassicPropertyListing,
  ],
  templateUrl: "./classic.html",
  styleUrls: ["./classic.scss"],
})
export class Classic {
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
