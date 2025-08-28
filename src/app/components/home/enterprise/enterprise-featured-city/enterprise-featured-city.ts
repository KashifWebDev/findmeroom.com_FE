import { Component, inject, input } from "@angular/core";

import { PropertyInCities } from "../../../../shared/components/common/property-in-cities/property-in-cities";
import { Title } from "../../../../shared/components/ui/title/title";
import { IPropertyInCity } from "../../../../shared/interface/property";
import { PropertyService } from "../../../../shared/services/property.service";

@Component({
  selector: "app-enterprise-featured-city",
  imports: [Title, PropertyInCities],
  templateUrl: "./enterprise-featured-city.html",
  styleUrls: ["./enterprise-featured-city.scss"],
})
export class EnterpriseFeaturedCity {
  private propertyService = inject(PropertyService);

  readonly title = input<string>();

  public desc =
    "See why ProCity is one of the best friends for exploring the city.";

  public propertyInCity: IPropertyInCity[] = [];

  ngOnInit() {
    this.propertyService.propertyInCityData().subscribe((response) => {
      this.propertyInCity = response.property.filter((item) =>
        item.type.includes(this.title()!),
      );
    });
  }
}
