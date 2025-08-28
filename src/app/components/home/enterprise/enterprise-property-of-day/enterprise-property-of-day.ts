import { Component, inject, input } from "@angular/core";

import { PropertyOfDay } from "../../../../shared/components/common/property-of-day/property-of-day";
import { Title } from "../../../../shared/components/ui/title/title";
import { IPropertyOfDay } from "../../../../shared/interface/property";
import { PropertyService } from "../../../../shared/services/property.service";

@Component({
  selector: "app-enterprise-property-of-day",
  imports: [Title, PropertyOfDay],
  templateUrl: "./enterprise-property-of-day.html",
  styleUrls: ["./enterprise-property-of-day.scss"],
})
export class EnterprisePropertyOfDay {
  propertyService = inject(PropertyService);

  readonly title = input<string>();

  public desc =
    "Discover New York’s best things to do, restaurants, theatre, nightlife and more";

  public propertyOfDay: IPropertyOfDay[] = [];

  ngOnInit() {
    this.propertyService.propertyOfDayData().subscribe((response) => {
      this.propertyOfDay = response.propertyOfDay.filter((item) =>
        item.type.includes(this.title()!),
      );
    });
  }
}
