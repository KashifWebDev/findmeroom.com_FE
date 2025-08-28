import { CommonModule } from "@angular/common";
import { Component, HostListener, input } from "@angular/core";

import { IPropertyDetailsData } from "../../../../../shared/interface/property";
import { Features } from "../../features/features";
import { Gallery } from "../../gallery/gallery";
import { PropertyBrief } from "../../property-brief/property-brief";
import { PropetyDetails } from "../../propety-details/propety-details";
import { PropetyFloorPlan } from "../../propety-floor-plan/propety-floor-plan";
import { PropetyLocation } from "../../propety-location/propety-location";
import { Review } from "../../review/review";
import { Video } from "../../video/video";

@Component({
  selector: "app-property-slider",
  templateUrl: "./property-slider.html",
  styleUrls: ["./property-slider.scss"],
  imports: [
    Features,
    Gallery,
    Video,
    PropetyDetails,
    PropetyFloorPlan,
    CommonModule,
    PropetyLocation,
    Review,
    PropertyBrief,
  ],
})
export class PropertySlider {
  readonly propertyData = input<IPropertyDetailsData>();

  public activeClass = "about";
  public navFixed: boolean = false;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = window.pageYOffset || 0;

    if (number > 500) {
      this.navFixed = true;
    } else {
      this.navFixed = false;
    }
    if (number < 850) {
      this.activeClass = "about";
    }
    if (number > 850) {
      this.activeClass = "feature";
    }
    if (number > 1110) {
      this.activeClass = "gallery";
    }
    if (number > 2000) {
      this.activeClass = "video";
    }
    if (number > 2750) {
      this.activeClass = "details";
    }
    if (number > 3120) {
      this.activeClass = "floor_plan";
    }
    if (number > 3870) {
      this.activeClass = "location";
    }
    if (number > 4450) {
      this.activeClass = "review";
    }
  }

  setPage(value: string) {
    document.getElementById(value)?.scrollIntoView({ behavior: "smooth" });
    this.activeClass = value;
  }
}
