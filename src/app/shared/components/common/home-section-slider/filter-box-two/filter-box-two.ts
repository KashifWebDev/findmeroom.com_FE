import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import {
  baths,
  beds,
  propertyType,
  rooms,
} from "../../../../data/advance-filter";

@Component({
  selector: "app-filter-box-two",
  imports: [RouterModule],
  templateUrl: "./filter-box-two.html",
  styleUrls: ["./filter-box-two.scss"],
})
export class FilterBoxTwo {
  public propertyType = propertyType;
  public rooms = rooms;
  public beds = beds;
  public baths = baths;
}
