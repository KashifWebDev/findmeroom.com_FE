import { Component, inject, output } from "@angular/core";

import { ILatestForRent } from "../../../../../../shared/interface/property";
import { PropertyService } from "../../../../../../shared/services/property.service";
import { category } from "../../../../../data/advance-filter";

@Component({
  selector: "app-category",
  imports: [],
  templateUrl: "./category.html",
  styleUrls: ["./category.scss"],
})
export class Category {
  private propertyService = inject(PropertyService);

  readonly categoryValue = output<string>();

  public category = category;
  public totalApartment: ILatestForRent[] = [];
  public totalVilla: ILatestForRent[] = [];
  public totalFamilyHouse: ILatestForRent[] = [];
  public totalTownHouse: ILatestForRent[] = [];
  public totalOffice: ILatestForRent[] = [];
  public totalDuplex: ILatestForRent[] = [];

  constructor() {
    this.propertyService.latestForRentData().subscribe((data) => {
      data.latestForRent.filter((property) => {
        if (property.params) {
          if (property.params.includes("apartment")) {
            this.totalApartment.push(property);
          } else if (property.params.includes("villa")) {
            this.totalVilla.push(property);
          } else if (property.params.includes("family_house")) {
            this.totalFamilyHouse.push(property);
          } else if (property.params.includes("town_house")) {
            this.totalTownHouse.push(property);
          } else if (property.params.includes("office")) {
            this.totalOffice.push(property);
          } else if (property.params.includes("duplex")) {
            this.totalDuplex.push(property);
          }
        }
      });
    });
  }

  getCategory(value: string) {
    this.categoryValue.emit(value);
  }
}
