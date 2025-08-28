import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";

import {
  IDetailsData,
  IPropertyDetailsData,
} from "../../../../../shared/interface/property";
import { Features } from "../../features/features";
import { Gallery } from "../../gallery/gallery";
import { PropertyBrief } from "../../property-brief/property-brief";
import { PropetyDetails } from "../../propety-details/propety-details";
import { PropetyFloorPlan } from "../../propety-floor-plan/propety-floor-plan";
import { PropetyLocation } from "../../propety-location/propety-location";
import { Review } from "../../review/review";
import { Video } from "../../video/video";

@Component({
  selector: "app-property-tab",
  templateUrl: "./property-tab.html",
  styleUrls: ["./property-tab.scss"],
  imports: [
    CommonModule,
    PropetyDetails,
    Features,
    Gallery,
    Review,
    PropetyFloorPlan,
    PropetyLocation,
    PropertyBrief,
    Video,
  ],
})
export class PropertyTab {
  readonly propertyData = input<IPropertyDetailsData>();
  readonly dataArray = input<string[]>();
  readonly propertyDetailsData = input<IDetailsData[]>();

  public active = 1;
  public openTab: string = "about";

  public tabbed(val: string) {
    this.openTab = val;
  }
}
