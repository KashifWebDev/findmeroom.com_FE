import { Component } from "@angular/core";

import { AvailableProperty } from "./available-property/available-property";
import { PropertyOverview } from "./property-overview/property-overview";
import { SalesByAgents } from "./sales-by-agents/sales-by-agents";
import { SalesOverview } from "./sales-overview/sales-overview";
import { TopCommonCharts } from "./top-common-charts/top-common-charts";
import { Breadcrumb } from "../../../../shared/components/ui/breadcrumb/breadcrumb";
import {
  totalAgents,
  totalProperty,
  totalSales,
} from "../../../../shared/data/dashboard-charts";
import { UserInfo } from "../widgets/user-info/user-info";
import { UserPanelSideMenu } from "../widgets/user-panel-side-menu/user-panel-side-menu";

@Component({
  selector: "app-user-dashboard",
  templateUrl: "./user-dashboard.html",
  styleUrls: ["./user-dashboard.scss"],
  imports: [
    Breadcrumb,
    UserInfo,
    UserPanelSideMenu,
    TopCommonCharts,
    SalesOverview,
    SalesByAgents,
    AvailableProperty,
    PropertyOverview,
  ],
})
export class UserDashboard {
  public themeLogo = "assets/images/logo/2.png";
  public footerLogo = "assets/images/logo/footer-logo.png";
  public bgImage = "assets/images/inner-background.jpg";
  public title = "Dashboard";
  public parent = "Home";
  public child = "Dashboard";

  public totalAgents = totalAgents;
  public totalSales = totalSales;
  public totalProperty = totalProperty;

  public theme_default3 = "#ff5c41";
  public theme_default4 = "#ff8c41";

  ngOnInit() {
    document.documentElement.style.setProperty(
      "--theme-default",
      this.theme_default3,
    );
    document.documentElement.style.setProperty(
      "--theme-default3",
      this.theme_default3,
    );
    document.documentElement.style.setProperty(
      "--theme-default4",
      this.theme_default4,
    );
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty("--theme-default");
    document.documentElement.style.removeProperty("--theme-default3");
    document.documentElement.style.removeProperty("--theme-default4");
  }
}
