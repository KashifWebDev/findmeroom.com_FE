import { Component, input } from "@angular/core";

import { PropertyCityOne } from "./property-city-one/property-city-one";
import { PropertyCityTwo } from "./property-city-two/property-city-two";
import { IPropertyInCity } from "../../../../shared/interface/property";

@Component({
  selector: "app-property-in-cities",
  imports: [PropertyCityOne, PropertyCityTwo],
  templateUrl: "./property-in-cities.html",
  styleUrls: ["./property-in-cities.scss"],
})
export class PropertyInCities {
  readonly propertyInCity = input<IPropertyInCity>();
  readonly propertyInCityData = input<IPropertyInCity[]>();
  readonly type = input<string>("");
  readonly tagClass = input<string>("");
}
