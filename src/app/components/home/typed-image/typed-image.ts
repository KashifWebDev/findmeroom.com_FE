import { Component } from "@angular/core";

import { TypedImageHomeSection } from "./typed-image-home-section/typed-image-home-section";
import { ImageContentBrand } from "../image-content/image-content-brand/image-content-brand";
import { SliderFilterAgents } from "../slider-filter-search/slider-filter-agents/slider-filter-agents";
import { SliderFilterBanner } from "../slider-filter-search/slider-filter-banner/slider-filter-banner";
import { SliderFilterFeaturedProperty } from "../slider-filter-search/slider-filter-featured-property/slider-filter-featured-property";
import { SliderFilterHappyClient } from "../slider-filter-search/slider-filter-happy-client/slider-filter-happy-client";
import { SliderFilterLatestRent } from "../slider-filter-search/slider-filter-latest-rent/slider-filter-latest-rent";
import { SliderFilterNewOffer } from "../slider-filter-search/slider-filter-new-offer/slider-filter-new-offer";
import { SliderFilterPropertyInCities } from "../slider-filter-search/slider-filter-property-in-cities/slider-filter-property-in-cities";

@Component({
  selector: "app-typed-image",
  templateUrl: "./typed-image.html",
  styleUrls: ["./typed-image.scss"],
  imports: [
    SliderFilterLatestRent,
    SliderFilterFeaturedProperty,
    SliderFilterBanner,
    SliderFilterPropertyInCities,
    SliderFilterHappyClient,
    SliderFilterAgents,
    SliderFilterNewOffer,
    ImageContentBrand,
    TypedImageHomeSection,
  ],
})
export class TypedImage {
  public headerClass: string =
    "header-1 header-9 inner-page light-header shadow-cls";
  public headerLogo: string = "assets/images/logo/10.png";
  public darkThemeLogo: string = "assets/images/logo/1.png";
  public title: string = "typed_image";
  public footerClass = "footer-brown";

  public theme_default = "#6432b8";
  public theme_default2 = "#9516d7";

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
