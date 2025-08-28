import { CommonModule } from "@angular/common";
import { Component, inject, input } from "@angular/core";

import { PropertyInCities } from "../../../../shared/components/common/property-in-cities/property-in-cities";
import { Title } from "../../../../shared/components/ui/title/title";
import { IPropertyInCity } from "../../../../shared/interface/property";
import { PropertyService } from "../../../../shared/services/property.service";

@Component({
  selector: "app-slider-filter-property-in-cities",
  imports: [Title, PropertyInCities, CommonModule],
  templateUrl: "./slider-filter-property-in-cities.html",
  styleUrls: ["./slider-filter-property-in-cities.scss"],
})
export class SliderFilterPropertyInCities {
  private propertyService = inject(PropertyService);

  readonly title = input<string>();
  readonly tagClass = input<string>("");
  readonly sectionClass = input<string>();
  public propertyInCity: IPropertyInCity[] = [];

  ngOnInit() {
    this.propertyService.propertyInCityData().subscribe((response) => {
      this.propertyInCity = response.property.filter((item) =>
        item.type.includes(this.title()!),
      );
    });
  }
}
