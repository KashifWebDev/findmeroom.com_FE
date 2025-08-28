import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { availablePropertyData } from "../../../../../shared/data/dashboard-charts";

@Component({
  selector: "app-available-property",
  imports: [NgApexchartsModule],
  templateUrl: "./available-property.html",
  styleUrls: ["./available-property.scss"],
})
export class AvailableProperty {
  public availablePropertyData = availablePropertyData;
}
