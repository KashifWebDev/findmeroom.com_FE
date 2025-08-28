import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { salesByAgent } from "../../../../../shared/data/dashboard-charts";

@Component({
  selector: "app-sales-by-agents",
  imports: [NgApexchartsModule],
  templateUrl: "./sales-by-agents.html",
  styleUrls: ["./sales-by-agents.scss"],
})
export class SalesByAgents {
  public salesByAgents = salesByAgent;
}
