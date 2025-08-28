import { Component, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { Store } from "@ngxs/store";
import { Observable } from "rxjs";

import { CommonFilterListing } from "../../../../shared/components/common/widgets/common-filter-listing/common-filter-listing";
import { GridPanel } from "../../../../shared/components/common/widgets/grid-panel/grid-panel";
import { Pagination } from "../../../../shared/components/common/widgets/pagination/pagination";
import { Breadcrumb } from "../../../../shared/components/ui/breadcrumb/breadcrumb";
import { FeatherIcons } from "../../../../shared/components/ui/feather-icons/feather-icons";
import {
  ILatestForRent,
  IPagination,
} from "../../../../shared/interface/property";
import { PropertyService } from "../../../../shared/services/property.service";
import { AddCompareItem } from "../../../../shared/store/actions/compare.action";
import { RemoveWishlistItem } from "../../../../shared/store/actions/wishlist.action";
import { WishlistState } from "../../../../shared/store/states/wishlist.state";
import { UserInfo } from "../widgets/user-info/user-info";
import { UserPanelSideMenu } from "../widgets/user-panel-side-menu/user-panel-side-menu";

@Component({
  selector: "app-favourites",
  templateUrl: "./favourites.html",
  styleUrls: ["./favourites.scss"],
  imports: [
    Breadcrumb,
    UserInfo,
    UserPanelSideMenu,
    GridPanel,
    CommonFilterListing,
    FeatherIcons,
    Pagination,
  ],
})
export class Favourites {
  private propertyService = inject(PropertyService);
  private store = inject(Store);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  public themeLogo = "assets/images/logo/2.png";
  public footerLogo = "assets/images/logo/footer-logo.png";
  public bgImage = "assets/images/inner-background.jpg";
  public title = "Dashboard";
  public parent = "Home";
  public child = "Favourites";

  public totalData: number;
  public latestForRentData: ILatestForRent[];

  public paginate: IPagination; // Pagination use only
  public pageNo: number = 1;
  public paginationData: IPagination;
  public totalProperty: number;
  public filterValue: string;

  public theme_default3 = "#ff5c41";
  public theme_default4 = "#ff8c41";

  public wishlistData$: Observable<ILatestForRent[]> = this.store.select(
    WishlistState.GetWishlistData,
  );

  constructor() {
    this.route.queryParams.subscribe((params) => {
      this.pageNo = params["page"] ? params["page"] : this.pageNo;

      this.wishlistData$.subscribe((res) => {
        this.latestForRentData = res;

        this.paginate = this.propertyService.getPager(
          this.latestForRentData?.length,
          +this.pageNo,
        );

        this.latestForRentData = this.latestForRentData?.slice(
          this.paginate.startIndex,
          this.paginate.endIndex + 1,
        );
      });
    });
  }

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

  sortFilter(value: string) {
    this.filterValue = value;
  }

  setPage(page: number) {
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: page },
      queryParamsHandling: "merge", // preserve the existing query params in the route
      skipLocationChange: false, // do trigger navigation
    });
  }

  addCompare(data: ILatestForRent) {
    this.store.dispatch(new AddCompareItem(data));
  }

  removeItem(data: number) {
    this.store.dispatch(new RemoveWishlistItem(data));
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty("--theme-default");
    document.documentElement.style.removeProperty("--theme-default3");
    document.documentElement.style.removeProperty("--theme-default4");
  }
}
