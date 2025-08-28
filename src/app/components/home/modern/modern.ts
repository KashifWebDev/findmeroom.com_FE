import { Component, inject } from "@angular/core";

import { ModernHomeSection } from "./modern-home-section/modern-home-section";
import { ILatestForRent } from "../../../shared/interface/property";
import { PropertyService } from "../../../shared/services/property.service";
import { EnterpriseBanner } from "../enterprise/enterprise-banner/enterprise-banner";
import { EnterpriseBrand } from "../enterprise/enterprise-brand/enterprise-brand";
import { EnterpriseFeaturedCity } from "../enterprise/enterprise-featured-city/enterprise-featured-city";
import { EnterpriseLatestBlog } from "../enterprise/enterprise-latest-blog/enterprise-latest-blog";
import { EnterpriseLatestProperty } from "../enterprise/enterprise-latest-property/enterprise-latest-property";
import { EnterpriseLookingFor } from "../enterprise/enterprise-looking-for/enterprise-looking-for";
import { EnterprisePeopleSay } from "../enterprise/enterprise-people-say/enterprise-people-say";
import { EnterprisePropertyOfDay } from "../enterprise/enterprise-property-of-day/enterprise-property-of-day";
import { EnterprisePropertyService } from "../enterprise/enterprise-property-service/enterprise-property-service";

@Component({
  selector: "app-modern",
  templateUrl: "./modern.html",
  styleUrls: ["./modern.scss"],
  imports: [
    EnterpriseLatestProperty,
    EnterpriseLookingFor,
    EnterprisePropertyOfDay,
    EnterpriseFeaturedCity,
    EnterpriseBanner,
    EnterprisePeopleSay,
    EnterpriseLatestBlog,
    EnterpriseBrand,
    EnterprisePropertyService,
    ModernHomeSection,
  ],
})
export class Modern {
  private propertyService = inject(PropertyService);

  public themeLogo = "assets/images/logo/2.png";
  public footerLogo = "assets/images/logo/footer-logo.png";
  public headerClass = "header-2";
  public title = "modern";

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
