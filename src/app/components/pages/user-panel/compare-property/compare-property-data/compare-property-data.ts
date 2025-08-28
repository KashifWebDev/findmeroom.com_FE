import { Component, inject } from "@angular/core";

import { Store } from "@ngxs/store";
import { Observable } from "rxjs";

import { ILatestForRent } from "../../../../../shared/interface/property";
import { RemoveCompareItem } from "../../../../../shared/store/actions/compare.action";
import { AddWishlistItem } from "../../../../../shared/store/actions/wishlist.action";
import { CompareState } from "../../../../../shared/store/states/compare.state";

@Component({
  selector: "app-compare-property-data",
  imports: [],
  templateUrl: "./compare-property-data.html",
  styleUrls: ["./compare-property-data.scss"],
})
export class ComparePropertyData {
  private store = inject(Store);

  public wishlistData$: Observable<ILatestForRent[]> = this.store.select(
    CompareState.GetCompareData,
  );

  public compareData: ILatestForRent[];

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

    this.wishlistData$.subscribe((res) => {
      this.compareData = res;
    });
  }

  addWishlist(data: ILatestForRent) {
    this.store.dispatch(new AddWishlistItem(data));
  }

  removeItem(data: number) {
    this.store.dispatch(new RemoveCompareItem(data));
  }
}
