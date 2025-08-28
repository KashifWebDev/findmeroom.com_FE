import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { salesOverviewChart } from "../../../../../shared/data/dashboard-charts";
import { salesOverviewCommonData } from "../../../../../shared/data/user-panel";

@Component({
  selector: "app-sales-overview",
  imports: [NgApexchartsModule],
  templateUrl: "./sales-overview.html",
  styleUrls: ["./sales-overview.scss"],
})
export class SalesOverview {
  public salesOverViewChartData = salesOverviewChart;
  public salesOverviewCommonData = salesOverviewCommonData;
}
