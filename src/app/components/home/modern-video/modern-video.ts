import { Component, inject } from "@angular/core";

import { ModernVideoHomeSection } from "./modern-video-home-section/modern-video-home-section";
import { ILatestForRent } from "../../../shared/interface/property";
import { PropertyService } from "../../../shared/services/property.service";
import { EnterpriseBanner } from "../enterprise/enterprise-banner/enterprise-banner";
import { EnterpriseBrand } from "../enterprise/enterprise-brand/enterprise-brand";
import { EnterpriseFeaturedCity } from "../enterprise/enterprise-featured-city/enterprise-featured-city";
import { EnterpriseLatestBlog } from "../enterprise/enterprise-latest-blog/enterprise-latest-blog";
import { EnterpriseLookingFor } from "../enterprise/enterprise-looking-for/enterprise-looking-for";
import { EnterprisePeopleSay } from "../enterprise/enterprise-people-say/enterprise-people-say";
import { EnterprisePropertyOfDay } from "../enterprise/enterprise-property-of-day/enterprise-property-of-day";
import { EnterprisePropertyService } from "../enterprise/enterprise-property-service/enterprise-property-service";
import { SliderFilterLatestRent } from "../slider-filter-search/slider-filter-latest-rent/slider-filter-latest-rent";

@Component({
  selector: "app-modern-video",
  templateUrl: "./modern-video.html",
  styleUrls: ["./modern-video.scss"],
  imports: [
    SliderFilterLatestRent,
    EnterpriseLookingFor,
    EnterprisePropertyOfDay,
    EnterprisePropertyService,
    EnterpriseFeaturedCity,
    EnterpriseBanner,
    EnterprisePeopleSay,
    EnterpriseLatestBlog,
    EnterpriseBrand,
    ModernVideoHomeSection,
  ],
})
export class ModernVideo {
  private propertyService = inject(PropertyService);

  public headerLogo = "assets/images/logo/4.png";
  public darkHeaderLogo = "assets/images/logo/9.png";
  public footerLogo = "assets/images/logo/footer-logo.png";
  public title = "modern_video";
  public heading = "Latest Property Listing";
  public desc =
    "Discover New York’s best things to do, restaurants, theatre, nightlife and more";

  public theme_default3 = "#ff5c41";
  public theme_default4 = "#ff8c41";

  public latestForRentData: ILatestForRent[];

  ngOnInit() {
    document.documentElement.style.setProperty(
      "--theme-default",
      this.theme_default3,
    );
    document.documentElement.style.setProperty(
      "--theme-default2",
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

    this.propertyService.latestForRentData().subscribe((response) => {
      this.latestForRentData = response.latestForRent.filter((item) =>
        item.type.includes(this.title),
      );
    });
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty("--theme-default");
    document.documentElement.style.removeProperty("--theme-default3");
    document.documentElement.style.removeProperty("--theme-default4");
  }
}
