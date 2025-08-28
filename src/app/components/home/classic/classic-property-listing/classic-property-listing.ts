import { CommonModule } from "@angular/common";
import { Component, inject, input } from "@angular/core";

import { PropertyBox } from "../../../../shared/components/common/property-box/property-box";
import { ILatestForRent } from "../../../../shared/interface/property";
import { PropertyService } from "../../../../shared/services/property.service";

@Component({
  selector: "app-classic-property-listing",
  imports: [CommonModule, PropertyBox],
  templateUrl: "./classic-property-listing.html",
  styleUrls: ["./classic-property-listing.scss"],
})
export class ClassicPropertyListing {
  propertyService = inject(PropertyService);

  readonly latestPropertyData = input<ILatestForRent[]>();

  public lookingForData: ILatestForRent[];
  public title = "classic";
  public active = 1;
  public openTab: number = 1;

  ngOnInit() {
    this.propertyService.latestForRentData().subscribe((response) => {
      this.lookingForData = response.latestForRent.filter(
        (item) =>
          item.type.includes(this.title) && item.propertyTab === this.openTab,
      );
    });
  }

  public tabbed(val: number) {
    this.openTab = val;
    this.lookingForData = this.latestPropertyData()!.filter((data) => {
      return data.propertyTab === val;
    });
  }
}
