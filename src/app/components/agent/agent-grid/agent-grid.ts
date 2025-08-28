import { Component, inject } from "@angular/core";

import { AdvanceFilter } from "../../../shared/components/common/advance-filter/advance-filter";
import { GridPanel } from "../../../shared/components/common/widgets/grid-panel/grid-panel";
import { Breadcrumb } from "../../../shared/components/ui/breadcrumb/breadcrumb";
import {
  IAgencyAgent,
  IPropertyDetailsData,
} from "../../../shared/interface/property";
import { PropertyService } from "../../../shared/services/property.service";
import { CommonAgency } from "../../pages/agency/widgets/common-agency/common-agency";

@Component({
  selector: "app-agent-grid",
  templateUrl: "./agent-grid.html",
  styleUrls: ["./agent-grid.scss"],
  imports: [Breadcrumb, GridPanel, AdvanceFilter, CommonAgency],
})
export class AgentGrid {
  private propertyService = inject(PropertyService);

  public themeLogo = "assets/images/logo/2.png";
  public footerLogo = "assets/images/logo/footer-logo.png";
  public bgImage = "assets/images/inner-background.jpg";
  public title = "Agent Grid";
  public parent = "Home";
  public child = "Agent Grid";

  public agentsData: IAgencyAgent[];
  public propertyData: IPropertyDetailsData;

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

    this.propertyService.agencyData().subscribe((response) => {
      this.agentsData = response.agentsData;
    });

    this.propertyService.propertyDetailsData().subscribe((response) => {
      this.propertyData = response;
    });
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty("--theme-default");
    document.documentElement.style.removeProperty("--theme-default3");
    document.documentElement.style.removeProperty("--theme-default4");
  }
}
