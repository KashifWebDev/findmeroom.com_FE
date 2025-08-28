import { Component, inject } from "@angular/core";

import { Banner } from "../../../../shared/components/common/banner/banner";
import { Brand } from "../../../../shared/components/common/brand/brand";
import { NewOffer } from "../../../../shared/components/common/new-offer/new-offer";
import { PricingPlan } from "../../../../shared/components/common/pricing-plan/pricing-plan";
import { PropertyOfDay } from "../../../../shared/components/common/property-of-day/property-of-day";
import { Breadcrumb } from "../../../../shared/components/ui/breadcrumb/breadcrumb";
import { Title } from "../../../../shared/components/ui/title/title";
import {
  IBanner,
  IBrand,
  IPricingPlan,
  IPropertyOfDay,
} from "../../../../shared/interface/property";
import { PropertyService } from "../../../../shared/services/property.service";

@Component({
  selector: "app-pricing",
  templateUrl: "./pricing.html",
  styleUrls: ["./pricing.scss"],
  imports: [
    Breadcrumb,
    Title,
    PricingPlan,
    NewOffer,
    PropertyOfDay,
    Banner,
    Brand,
  ],
})
export class Pricing {
  private propertyService = inject(PropertyService);

  public themeLogo = "assets/images/logo/2.png";
  public footerLogo = "assets/images/logo/footer-logo.png";
  public bgImage = "assets/images/inner-background.jpg";
  public title = "Pricing";
  public parent = "Home";
  public child = "Pricing";
  public tagClass = "color-2";

  public pricingDesc =
    "Discover New York’s best things to do, restaurants, theatre, nightlife and more";
  public offerDesc =
    "Discover New York’s best things to do, restaurants, theatre, nightlife and more";
  public propertyOfDayDesc =
    "Discover New York’s best things to do, restaurants, theatre, nightlife and more";

  public pricingTitle = "corporate";
  public offerTitle = "slider_filter_search";
  public propertyOfDayTitle = "enterprise";
  public bannerTitle = "enterprise";
  public bannerClassicTitle = "classic";
  public brandTitle = "classic";

  public pricingPlan: IPricingPlan[] = [];
  public propertyOfDay: IPropertyOfDay[] = [];
  public bannerData: IBanner[] = [];
  public bannerDataClassic: IBanner[] = [];
  public brandData: IBrand[] = [];

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
    document.documentElement.style.setProperty("--theme-default2", "#ff8c41");

    this.propertyService.pricingPlanData().subscribe((response) => {
      this.pricingPlan = response.pricingPlan.filter(
        (item) => item.type == this.pricingTitle,
      );
    });

    this.propertyService.propertyOfDayData().subscribe((response) => {
      this.propertyOfDay = response.propertyOfDay.filter((item) =>
        item.type.includes(this.propertyOfDayTitle),
      );
    });

    this.propertyService.bannerData().subscribe((response) => {
      this.bannerData = response.banner.filter(
        (item) => item.type == this.bannerTitle,
      );
      this.bannerDataClassic = response.banner.filter(
        (item) => item.type == this.bannerClassicTitle,
      );
    });

    this.propertyService.brandData().subscribe((response) => {
      this.brandData = response.brand.filter(
        (item) => item.type == this.brandTitle,
      );
    });
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty("--theme-default");
    document.documentElement.style.removeProperty("--theme-default2");
  }
}
