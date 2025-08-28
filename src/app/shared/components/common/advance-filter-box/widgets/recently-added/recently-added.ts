import { Component } from "@angular/core";

import { recentAdded } from "../../../../../data/advance-filter";

@Component({
  selector: "app-recently-added",
  imports: [],
  templateUrl: "./recently-added.html",
  styleUrls: ["./recently-added.scss"],
})
export class RecentlyAdded {
  public recentAdded = recentAdded;
}
