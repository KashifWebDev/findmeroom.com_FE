import { Component, input } from "@angular/core";

import { IPropertyDetails } from "../../../../shared/interface/property";

@Component({
  selector: "app-propety-details",
  imports: [],
  templateUrl: "./propety-details.html",
  styleUrls: ["./propety-details.scss"],
})
export class PropetyDetails {
  readonly propertyDetailsData = input<IPropertyDetails[]>();
}
