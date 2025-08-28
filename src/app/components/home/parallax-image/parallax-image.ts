import { Component } from "@angular/core";

import { ParallaxImageHomeSection } from "./parallax-image-home-section/parallax-image-home-section";
import { blogData } from "../../../shared/data/footer";
import { CorporateAgents } from "../corporate/corporate-agents/corporate-agents";
import { CorporateBanner } from "../corporate/corporate-banner/corporate-banner";
import { CorporateClients } from "../corporate/corporate-clients/corporate-clients";
import { CorporateFeaturedProperty } from "../corporate/corporate-featured-property/corporate-featured-property";
import { CorporateLatestBlog } from "../corporate/corporate-latest-blog/corporate-latest-blog";
import { CorporatePricingPlan } from "../corporate/corporate-pricing-plan/corporate-pricing-plan";
import { CorporatePropertyListing } from "../corporate/corporate-property-listing/corporate-property-listing";
import { CorporateProvidedServices } from "../corporate/corporate-provided-services/corporate-provided-services";

@Component({
  selector: "app-parallax-image",
  templateUrl: "./parallax-image.html",
  styleUrls: ["./parallax-image.scss"],
  imports: [
    CorporateProvidedServices,
    CorporatePropertyListing,
    CorporatePricingPlan,
    CorporateBanner,
    CorporateAgents,
    CorporateClients,
    CorporateLatestBlog,
    CorporateFeaturedProperty,
    ParallaxImageHomeSection,
  ],
})
export class ParallaxImage {
  public headerLogo = "assets/images/logo/7.png";
  public darkHeaderLogo = "assets/images/logo/8.png";
  public footerLogo = "assets/images/logo/8.png";
  public footerClass = "footer-dark";
  public heartIcon = false;
  public blogData = blogData;

  public theme_default10 = "#00968a";

  ngOnInit(): void {
    document.documentElement.style.setProperty(
      "--theme-default",
      this.theme_default10,
    );
    document.documentElement.style.setProperty(
      "--theme-default10",
      this.theme_default10,
    );
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty("--theme-default");
    document.documentElement.style.removeProperty("--theme-default10");
  }
}
