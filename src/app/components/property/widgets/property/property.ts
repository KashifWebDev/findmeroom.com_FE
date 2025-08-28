import { Component, input } from "@angular/core";

import { PropertySlider } from "./property-slider/property-slider";
import { PropertyTab } from "./property-tab/property-tab";
import {
  IDetailsData,
  IPropertyDetailsData,
} from "../../../../shared/interface/property";

@Component({
  selector: "app-property",
  imports: [PropertySlider, PropertyTab],
  templateUrl: "./property.html",
  styleUrls: ["./property.scss"],
})
export class Property {
  readonly propertyData = input<IPropertyDetailsData>();
  readonly type = input<string>();
  readonly dataArray = input<string[]>();
  readonly propertyDetailsData = input<IDetailsData[]>();
}
