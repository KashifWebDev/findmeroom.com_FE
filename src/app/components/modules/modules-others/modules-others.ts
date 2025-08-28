import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";

import { NewOffer } from "../../../shared/components/common/new-offer/new-offer";
import { PropertyInCities } from "../../../shared/components/common/property-in-cities/property-in-cities";
import { PropertyOfDay } from "../../../shared/components/common/property-of-day/property-of-day";
import { Breadcrumb } from "../../../shared/components/ui/breadcrumb/breadcrumb";
import { Title } from "../../../shared/components/ui/title/title";
import {
  IPropertyInCity,
  IPropertyOfDay,
} from "../../../shared/interface/property";
import { PropertyService } from "../../../shared/services/property.service";
import { ClassicBanner } from "../../home/classic/classic-banner/classic-banner";
import { ClassicVideo } from "../../home/classic/classic-video/classic-video";
import { CorporatePricingPlan } from "../../home/corporate/corporate-pricing-plan/corporate-pricing-plan";

@Component({
  selector: "app-modules-others",
  templateUrl: "./modules-others.html",
  styleUrls: ["./modules-others.scss"],
  imports: [
    Breadcrumb,
    Title,
    PropertyInCities,
    NewOffer,
    ClassicVideo,
    PropertyOfDay,
    CorporatePricingPlan,
    ClassicBanner,
    CommonModule,
  ],
})
export class ModulesOthers {
  private propertyService = inject(PropertyService);

  public themeLogo = "assets/images/logo/2.png";
  public footerLogo = "assets/images/logo/footer-logo.png";
  public bgImage = "assets/images/inner-background.jpg";
  public title = "Others";
  public parent = "Modules";
  public child = "Others";

  public desc =
    "Discover New York’s best things to do, restaurants, theatre, nightlife and more";

  public otherTitle1 = "image_content";
  public otherTitle2 = "enterprise";

  public propertyInCity: IPropertyInCity[] = [];
  public propertyOfDay: IPropertyOfDay[] = [];

  public theme_default3 = "#ff5c41";
  public theme_default4 = "#ff8c41";

  ngOnInit() {
    this.propertyService.propertyInCityData().subscribe((response) => {
      this.propertyInCity = response.property.filter((item) =>
        item.type.includes(this.otherTitle1),
      );
    });

    this.propertyService.propertyOfDayData().subscribe((response) => {
      this.propertyOfDay = response.propertyOfDay.filter((item) =>
        item.type.includes(this.otherTitle2),
      );
    });
  }
}
