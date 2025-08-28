import { Component, input } from "@angular/core";

import {
  IPropertyBrief,
  IPropertyDetails,
} from "../../../../shared/interface/property";

@Component({
  selector: "app-property-brief",
  imports: [],
  templateUrl: "./property-brief.html",
  styleUrls: ["./property-brief.scss"],
})
export class PropertyBrief {
  readonly propertyBriefData = input<IPropertyBrief[]>();
  readonly propertyDetailsData = input<IPropertyDetails[]>();
}
