import { CommonModule } from "@angular/common";
import { Component, inject, input } from "@angular/core";

import { PropertyBox } from "../../../../shared/components/common/property-box/property-box";
import { Title } from "../../../../shared/components/ui/title/title";
import { ILatestForRent } from "../../../../shared/interface/property";
import { PropertyService } from "../../../../shared/services/property.service";

@Component({
  selector: "app-corporate-property-listing",
  imports: [Title, PropertyBox, CommonModule],
  templateUrl: "./corporate-property-listing.html",
  styleUrls: ["./corporate-property-listing.scss"],
})
export class CorporatePropertyListing {
  propertyService = inject(PropertyService);

  readonly data = input<number>(0);
  readonly class = input<string>("");
  readonly tagClass = input<string>();
  readonly svgClass = input<boolean>(false);
  readonly containerClass = input<boolean>();

  public desc =
    "Residences can be classified into different types of housing tenure can used for same physical type.";
  public title = "corporate";

  public propertyListingData: ILatestForRent[] = [];

  ngOnInit() {
    this.propertyService.latestForRentData().subscribe((response) => {
      this.propertyListingData = response.latestForRent.filter(
        (item) => item.type == this.title,
      );
    });
  }
}
