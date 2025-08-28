import { Component, inject } from "@angular/core";

import { EnterpriseBanner } from "./enterprise-banner/enterprise-banner";
import { EnterpriseBrand } from "./enterprise-brand/enterprise-brand";
import { EnterpriseFeaturedCity } from "./enterprise-featured-city/enterprise-featured-city";
import { EnterpriseHomeSection } from "./enterprise-home-section/enterprise-home-section";
import { EnterpriseLatestBlog } from "./enterprise-latest-blog/enterprise-latest-blog";
import { EnterpriseLatestProperty } from "./enterprise-latest-property/enterprise-latest-property";
import { EnterpriseLookingFor } from "./enterprise-looking-for/enterprise-looking-for";
import { EnterprisePeopleSay } from "./enterprise-people-say/enterprise-people-say";
import { EnterprisePropertyOfDay } from "./enterprise-property-of-day/enterprise-property-of-day";
import { EnterprisePropertyService } from "./enterprise-property-service/enterprise-property-service";
import { ILatestForRent } from "../../../shared/interface/property";
import { PropertyService } from "../../../shared/services/property.service";

@Component({
  selector: "app-enterprise",
  imports: [
    EnterpriseHomeSection,
    EnterprisePropertyService,
    EnterprisePropertyOfDay,
    EnterpriseLatestProperty,
    EnterpriseLookingFor,
    EnterpriseFeaturedCity,
    EnterpriseBanner,
    EnterprisePeopleSay,
    EnterpriseLatestBlog,
    EnterpriseBrand,
  ],
  templateUrl: "./enterprise.html",
  styleUrls: ["./enterprise.scss"],
})
export class Enterprise {
  private propertyService = inject(PropertyService);

  public themeLogo = "assets/images/logo/footer-logo.png";
  public footerLogo = "assets/images/logo/footer-logo.png";
  public headerLogo = "assets/images/logo/2.png";
  public headerClass = "header-2";
  public title = "enterprise";

  public theme_default3 = "#ff5c41";
  public theme_default4 = "#ff8c41";

  public latestForRentData: ILatestForRent[];

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
