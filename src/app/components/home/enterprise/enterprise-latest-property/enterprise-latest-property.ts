import { CommonModule } from "@angular/common";
import { Component, inject, input } from "@angular/core";

import { PropertyBox } from "../../../../shared/components/common/property-box/property-box";
import { Title } from "../../../../shared/components/ui/title/title";
import { ILatestForRent } from "../../../../shared/interface/property";
import { PropertyService } from "../../../../shared/services/property.service";

@Component({
  selector: "app-enterprise-latest-property",
  imports: [PropertyBox, Title, CommonModule],
  templateUrl: "./enterprise-latest-property.html",
  styleUrls: ["./enterprise-latest-property.scss"],
})
export class EnterpriseLatestProperty {
  propertyService = inject(PropertyService);

  readonly tagClass = input<string>();
  readonly latestForRentData = input<ILatestForRent[]>();

  public desc =
    "Discover New York’s best things to do, restaurants, theatre, nightlife and more";
  public title = "enterprise";
}
