import { Component, inject, input } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";

import { ILatestForRent } from "../../../../../shared/interface/property";
import { AdvanceFilterBox } from "../../advance-filter-box/advance-filter-box";
import { AdvanceFilterBoxHorizontial } from "../../advance-filter-box-horizontial/advance-filter-box-horizontial";

@Component({
  selector: "app-common-filter-listing",
  imports: [AdvanceFilterBox, AdvanceFilterBoxHorizontial],
  templateUrl: "./common-filter-listing.html",
  styleUrls: ["./common-filter-listing.scss"],
})
export class CommonFilterListing {
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  readonly style = input<string>();
  readonly filterData = input<ILatestForRent[]>();

  public categoryValue: string;
  public totalProperty: number;
  public status: string;

  receivePropertyTotalData(value: number) {
    this.totalProperty = value;
  }

  getData(tag: Params) {
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: tag,
      queryParamsHandling: "merge", // preserve the existing query params in the route
      skipLocationChange: false, // do trigger navigation
    });
  }
}
