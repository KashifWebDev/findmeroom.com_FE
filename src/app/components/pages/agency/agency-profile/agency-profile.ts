import { Component, inject } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";

import { AdvanceFilter } from "../../../../shared/components/common/advance-filter/advance-filter";
import { CommonFilterPropertyBox } from "../../../../shared/components/common/widgets/common-filter-property-box/common-filter-property-box";
import { GridPanel } from "../../../../shared/components/common/widgets/grid-panel/grid-panel";
import { Breadcrumb } from "../../../../shared/components/ui/breadcrumb/breadcrumb";
import {
  IAgency,
  IAgencyAgent,
  IPagination,
} from "../../../../shared/interface/property";
import { PropertyService } from "../../../../shared/services/property.service";
import { AboutAgency } from "../widgets/about-agency/about-agency";
import { CommonAgency } from "../widgets/common-agency/common-agency";

@Component({
  selector: "app-agency-profile",
  templateUrl: "./agency-profile.html",
  styleUrls: ["./agency-profile.scss"],
  imports: [
    Breadcrumb,
    AboutAgency,
    CommonAgency,
    GridPanel,
    CommonFilterPropertyBox,
    AdvanceFilter,
  ],
})
export class AgencyProfile {
  private propertyService = inject(PropertyService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  public themeLogo = "assets/images/logo/2.png";
  public footerLogo = "assets/images/logo/footer-logo.png";
  public bgImage = "assets/images/inner-background.jpg";
  public title = "Profile";
  public parent = "Home";
  public child = "Agency Profile";

  public aboutAgency: IAgency[];
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

    this.propertyService.agencyData().subscribe((response) => {
      this.aboutAgency = response.agencyData;
      this.agentsData = response.agentsData;
    });
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty("--theme-default");
    document.documentElement.style.removeProperty("--theme-default3");
    document.documentElement.style.removeProperty("--theme-default4");
  }

  getData(tag: Params) {
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: tag,
      queryParamsHandling: "merge", // preserve the existing query params in the route
      skipLocationChange: false, // do trigger navigation
    });
  }

  receivePropertyTotalData(value: number) {
    this.totalProperty = value;
  }

  getPaginationData(pagination: IPagination) {
    this.paginationData = pagination;
  }

  sortFilter(value: string) {
    this.filterValue = value;
  }
}
