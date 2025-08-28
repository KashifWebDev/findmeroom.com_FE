import { Component, inject } from "@angular/core";

import { AdvanceFilter } from "../../../shared/components/common/advance-filter/advance-filter";
import { HomeSectionSlider } from "../../../shared/components/common/home-section-slider/home-section-slider";
import {
  IHomeSectionSlider,
  ILatestForRent,
  IPropertyDetailsData,
} from "../../../shared/interface/property";
import { PropertyService } from "../../../shared/services/property.service";
import { HomeDetails } from "../widgets/home-details/home-details";
import { Property } from "../widgets/property/property";
import { RelatedProperty } from "../widgets/related-property/related-property";

@Component({
  selector: "app-sticky-tab",
  templateUrl: "./sticky-tab.html",
  styleUrls: ["./sticky-tab.scss"],
  imports: [
    HomeSectionSlider,
    HomeDetails,
    Property,
    AdvanceFilter,
    RelatedProperty,
  ],
})
export class StickyTab {
  private propertyService = inject(PropertyService);

  public themeLogo = "assets/images/logo/2.png";
  public footerLogo = "assets/images/logo/footer-logo.png";
  public title = "sticky_tab";

  public total = 3;
  public homeSectionSliderData: IHomeSectionSlider[];
  public latestForRentData: ILatestForRent[] = [];
  public propertyData: IPropertyDetailsData;

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

    this.propertyService.homeSliderData().subscribe((response) => {
      this.homeSectionSliderData = response.homeSection.filter(
        (item) => item.type == this.title,
      );
    });

    this.propertyService.propertyDetailsData().subscribe((response) => {
      this.propertyData = response;
    });

    this.propertyService.latestForRentData().subscribe((response) => {
      this.latestForRentData = response.latestForRent.filter((item) =>
        item.type.includes("slider_filter_search"),
      );
    });
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty("--theme-default");
    document.documentElement.style.removeProperty("--theme-default3");
    document.documentElement.style.removeProperty("--theme-default4");
  }
}
