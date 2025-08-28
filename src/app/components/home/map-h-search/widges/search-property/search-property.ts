import { Component } from "@angular/core";

import { propertySearchData } from "../../../../../shared/data/map-h-search";

@Component({
  selector: "app-search-property",
  imports: [],
  templateUrl: "./search-property.html",
  styleUrls: ["./search-property.scss"],
})
export class SearchProperty {
  public propertySearchData = propertySearchData;
  public open: boolean = false;
  public id: number;
  public selectedData = "Any Location In Country";

  openMenu(id: number) {
    this.propertySearchData.filter((data) => {
      if (data.id === id) {
        this.id = id;
        this.open = !this.open;
      }
    });
  }

  select(id: number, value: string) {
    this.propertySearchData.filter((data) => {
      if (data.id == id) {
        data.listData.filter((item) => {
          if (item.data == value) {
            this.selectedData = value;
          }
        });
      }
    });
  }
}
