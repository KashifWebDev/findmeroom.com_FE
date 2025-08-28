import { Component, input } from "@angular/core";

import { IPropertyInCity } from "../../../../../shared/interface/property";

@Component({
  selector: "app-property-city-one",
  imports: [],
  templateUrl: "./property-city-one.html",
  styleUrls: ["./property-city-one.scss"],
})
export class PropertyCityOne {
  readonly propertyInCity = input<IPropertyInCity>();
  readonly tagClass = input<string>("");
}
