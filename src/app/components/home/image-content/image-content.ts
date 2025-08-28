import { Component, inject } from "@angular/core";

import { ImageContentBrand } from "./image-content-brand/image-content-brand";
import { ImageContentHomeSection } from "./image-content-home-section/image-content-home-section";
import { blogData } from "../../../shared/data/footer";
import { LayoutService } from "../../../shared/services/layout.service";
import { SliderFilterAgents } from "../slider-filter-search/slider-filter-agents/slider-filter-agents";
import { SliderFilterBanner } from "../slider-filter-search/slider-filter-banner/slider-filter-banner";
import { SliderFilterFeaturedProperty } from "../slider-filter-search/slider-filter-featured-property/slider-filter-featured-property";
import { SliderFilterHappyClient } from "../slider-filter-search/slider-filter-happy-client/slider-filter-happy-client";
import { SliderFilterLatestRent } from "../slider-filter-search/slider-filter-latest-rent/slider-filter-latest-rent";
import { SliderFilterNewOffer } from "../slider-filter-search/slider-filter-new-offer/slider-filter-new-offer";
import { SliderFilterPropertyInCities } from "../slider-filter-search/slider-filter-property-in-cities/slider-filter-property-in-cities";

@Component({
  selector: "app-image-content",
  imports: [
    ImageContentHomeSection,
    SliderFilterLatestRent,
    SliderFilterFeaturedProperty,
    SliderFilterBanner,
    SliderFilterPropertyInCities,
    SliderFilterHappyClient,
    SliderFilterAgents,
    SliderFilterNewOffer,
    ImageContentBrand,
  ],
  providers: [LayoutService],
  templateUrl: "./image-content.html",
  styleUrls: ["./image-content.scss"],
})
export class ImageContent {
  private layoutService = inject(LayoutService);

  public themeLogo = "assets/images/logo/1.png";
  public headerClass = "header-1 fixed-header";
  public title = "image_content";
  public footerClass = "footer-brown";
  public blogData = blogData;

  public theme_default = "#6432b8";
  public theme_default2 = "#9516d7";

  constructor() {
    this.layoutService.headerStyle = "simple";
    this.layoutService.headerLogo = this.themeLogo;
    this.layoutService.headerClass = this.headerClass;
    this.layoutService.headerFix = true;
  }

  ngOnInit(): void {
    document.documentElement.style.setProperty(
      "--theme-default",
      this.theme_default,
    );
    document.documentElement.style.setProperty(
      "--theme-default2",
      this.theme_default2,
    );
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty("--theme-default");
    document.documentElement.style.removeProperty("--theme-default2");
  }
}
