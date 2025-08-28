import { Component } from "@angular/core";

import { SliderFilterAgents } from "./slider-filter-agents/slider-filter-agents";
import { SliderFilterBanner } from "./slider-filter-banner/slider-filter-banner";
import { SliderFilterBrand } from "./slider-filter-brand/slider-filter-brand";
import { SliderFilterFeaturedProperty } from "./slider-filter-featured-property/slider-filter-featured-property";
import { SliderFilterHappyClient } from "./slider-filter-happy-client/slider-filter-happy-client";
import { SliderFilterHomeSlider } from "./slider-filter-home-slider/slider-filter-home-slider";
import { SliderFilterLatestRent } from "./slider-filter-latest-rent/slider-filter-latest-rent";
import { SliderFilterLatestSale } from "./slider-filter-latest-sale/slider-filter-latest-sale";
import { SliderFilterNewOffer } from "./slider-filter-new-offer/slider-filter-new-offer";
import { SliderFilterPropertyInCities } from "./slider-filter-property-in-cities/slider-filter-property-in-cities";

@Component({
  selector: "app-slider-filter-search",
  imports: [
    SliderFilterHomeSlider,
    SliderFilterLatestSale,
    SliderFilterFeaturedProperty,
    SliderFilterLatestRent,
    SliderFilterNewOffer,
    SliderFilterPropertyInCities,
    SliderFilterBanner,
    SliderFilterAgents,
    SliderFilterHappyClient,
    SliderFilterBrand,
  ],
  templateUrl: "./slider-filter-search.html",
  styleUrls: ["./slider-filter-search.scss"],
})
export class SliderFilterSearch {
  public themeLogo = "assets/images/logo/6.png";
  public title = "slider_filter_search";
  public footerClass = "footer-brown";
  public headerClass = "header-1 header-6";

  public theme_default8 = "#2c2e97";
  public theme_default9 = "#4b55c4";

  ngOnInit(): void {
    document.documentElement.style.setProperty(
      "--theme-default",
      this.theme_default8,
    );
    document.documentElement.style.setProperty(
      "--theme-default8",
      this.theme_default8,
    );
    document.documentElement.style.setProperty(
      "--theme-default9",
      this.theme_default9,
    );
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty("--theme-default");
    document.documentElement.style.removeProperty("--theme-default8");
    document.documentElement.style.removeProperty("--theme-default9");
  }
}
