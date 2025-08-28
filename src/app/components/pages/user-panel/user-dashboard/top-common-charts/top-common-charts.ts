import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";

import { ChartistModule } from "ng-chartist";

import { FullChartDetails } from "../../../../../shared/interface/chart";

@Component({
  selector: "app-top-common-charts",
  imports: [CommonModule, ChartistModule],
  templateUrl: "./top-common-charts.html",
  styleUrls: ["./top-common-charts.scss"],
})
export class TopCommonCharts {
  readonly chartData = input<FullChartDetails>();
}
