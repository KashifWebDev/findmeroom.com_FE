import { CommonModule } from "@angular/common";
import { Component, inject, input } from "@angular/core";

import { PropertyBox } from "../../../../shared/components/common/property-box/property-box";
import { Title } from "../../../../shared/components/ui/title/title";
import { ILatestForRent } from "../../../../shared/interface/property";
import { PropertyService } from "../../../../shared/services/property.service";

@Component({
  selector: "app-enterprise-looking-for",
  imports: [PropertyBox, Title, CommonModule],
  templateUrl: "./enterprise-looking-for.html",
  styleUrls: ["./enterprise-looking-for.scss"],
})
export class EnterpriseLookingFor {
  propertyService = inject(PropertyService);

  readonly latestForRentData = input<ILatestForRent[]>();
  readonly title = input<string>("");
  readonly tagClass = input<string>("");

  public desc =
    "Discover New York’s best things to do, restaurants, theatre, nightlife and more";
  public active = 1;
  public openTab: string = "family_house";

  public lookingForData: ILatestForRent[];

  ngOnInit() {
    this.propertyService.latestForRentData().subscribe((response) => {
      this.lookingForData = response.latestForRent.filter(
        (item) =>
          item.type.includes(this.title()) &&
          item.propertyType === this.openTab,
      );
    });
  }

  public tabbed(val: string) {
    this.openTab = val;

    this.lookingForData = this.latestForRentData()!.filter((data) => {
      return data.propertyType === val;
    });
  }
}
