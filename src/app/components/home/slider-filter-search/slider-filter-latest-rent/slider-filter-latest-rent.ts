import { CommonModule } from "@angular/common";
import { Component, inject, input } from "@angular/core";

import { PropertyBox } from "../../../../shared/components/common/property-box/property-box";
import { Title } from "../../../../shared/components/ui/title/title";
import { ILatestForRent } from "../../../../shared/interface/property";
import { PropertyService } from "../../../../shared/services/property.service";

@Component({
  selector: "app-slider-filter-latest-rent",
  imports: [Title, PropertyBox, CommonModule],
  templateUrl: "./slider-filter-latest-rent.html",
  styleUrls: ["./slider-filter-latest-rent.scss"],
})
export class SliderFilterLatestRent {
  propertyService = inject(PropertyService);

  readonly propertyClass = input<boolean>();
  readonly tagClass = input<string>("");
  readonly total = input<number>();
  readonly title = input<string>("");
  readonly listView = input<boolean>(false);
  readonly titleClass = input<string>("title-1");
  readonly type = input<string>("simple");
  readonly heading = input<string>("Latest For Sale");
  readonly desc = input<string>("");

  public latestForRentData: ILatestForRent[] = [];

  ngOnInit() {
    this.propertyService.latestForRentData().subscribe((response) => {
      this.latestForRentData = response.latestForRent.filter((item) =>
        item.type.includes(this.title()),
      );
    });
  }
}
