import { Component, inject } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";

import { AdvanceFilter } from "../../../shared/components/common/advance-filter/advance-filter";
import { CommonFilterPropertyBox } from "../../../shared/components/common/widgets/common-filter-property-box/common-filter-property-box";
import { GridPanel } from "../../../shared/components/common/widgets/grid-panel/grid-panel";
import { Breadcrumb } from "../../../shared/components/ui/breadcrumb/breadcrumb";
import {
  IAgency,
  IAgencyAgent,
  IPagination,
} from "../../../shared/interface/property";
import { PropertyService } from "../../../shared/services/property.service";
import { AgentProfileDetails } from "../widgets/agent-profile-details/agent-profile-details";

@Component({
  selector: "app-agent-profile",
  templateUrl: "./agent-profile.html",
  styleUrls: ["./agent-profile.scss"],
  imports: [
    Breadcrumb,
    GridPanel,
    CommonFilterPropertyBox,
    AdvanceFilter,
    AgentProfileDetails,
  ],
})
export class AgentProfile {
  private propertyService = inject(PropertyService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  public themeLogo = "assets/images/logo/2.png";
  public footerLogo = "assets/images/logo/footer-logo.png";
  public bgImage = "assets/images/inner-background.jpg";
  public title = "Agent Profile";
  public parent = "Home";
  public child = "Agent Profile";

  public agentsDetails: IAgency[];
  public agentsData: IAgencyAgent[];

  public paginationData: IPagination;

  public totalProperty: number;
  public filterValue: string;

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

    this.propertyService.agentsDetailsData().subscribe((response) => {
      this.agentsDetails = response.agentsProfileDetails;
    });

    this.propertyService.agencyData().subscribe((response) => {
      this.agentsData = response.agentsData;
    });
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty("--theme-default");
    document.documentElement.style.removeProperty("--theme-default3");
    document.documentElement.style.removeProperty("--theme-default4");
  }

  public getData(tag: Params) {
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: tag,
      queryParamsHandling: "merge", // preserve the existing query params in the route
      skipLocationChange: false, // do trigger navigation
    });
  }

  public receivePropertyTotalData(value: number) {
    this.totalProperty = value;
  }

  public getPaginationData(pagination: IPagination) {
    this.paginationData = pagination;
  }

  public sortFilter(value: string) {
    this.filterValue = value;
  }
}
