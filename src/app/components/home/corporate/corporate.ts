import { Component, input } from "@angular/core";

import { CorporateAgents } from "./corporate-agents/corporate-agents";
import { CorporateBanner } from "./corporate-banner/corporate-banner";
import { CorporateClients } from "./corporate-clients/corporate-clients";
import { CorporateFeaturedProperty } from "./corporate-featured-property/corporate-featured-property";
import { CorporateHomeSlider } from "./corporate-home-slider/corporate-home-slider";
import { CorporateLatestBlog } from "./corporate-latest-blog/corporate-latest-blog";
import { CorporatePricingPlan } from "./corporate-pricing-plan/corporate-pricing-plan";
import { CorporatePropertyListing } from "./corporate-property-listing/corporate-property-listing";
import { CorporateProvidedServices } from "./corporate-provided-services/corporate-provided-services";
import { blogData } from "../../../shared/data/footer";

@Component({
  selector: "app-corporate",
  imports: [
    CorporateHomeSlider,
    CorporatePropertyListing,
    CorporateProvidedServices,
    CorporatePricingPlan,
    CorporateFeaturedProperty,
    CorporateBanner,
    CorporateAgents,
    CorporateClients,
    CorporateLatestBlog,
  ],
  templateUrl: "./corporate.html",
  styleUrls: ["./corporate.scss"],
})
export class Corporate {
  readonly darkFooterLogo = input<string>("assets/images/logo/3.png");

  public headerLogo = "assets/images/logo/5.png";
  public darkHeaderLogo = "assets/images/logo/11.png";
  public footerLogo = "assets/images/logo/3.png";
  public footerClass = "footer-dark";
  public subFooterClass = "sub-footer-dark";
  public heartIcon = false;
  public blogData = blogData;

  public theme_default5 = "#5eac12";
  ngOnInit(): void {
    document.documentElement.style.setProperty(
      "--theme-default",
      this.theme_default5,
    );
    document.documentElement.style.setProperty(
      "--theme-default5",
      this.theme_default5,
    );
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty("--theme-default");
    document.documentElement.style.removeProperty("--theme-default5");
  }
}
