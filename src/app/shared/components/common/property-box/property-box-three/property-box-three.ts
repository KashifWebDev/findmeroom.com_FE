import { CommonModule } from "@angular/common";
import { Component, inject, input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { Store } from "@ngxs/store";
import { CarouselModule } from "ngx-owl-carousel-o";

import { ILatestForRent } from "../../../../../shared/interface/property";
import { PropertyService } from "../../../../../shared/services/property.service";
import { AddCompareItem } from "../../../../../shared/store/actions/compare.action";
import { CurrencySymbolPipe } from "../../../../pipe/currency-symbol.pipe";
import { AddWishlistItem } from "../../../../store/actions/wishlist.action";
import { FeatherIcons } from "../../../ui/feather-icons/feather-icons";

@Component({
  selector: "app-property-box-three",
  imports: [CarouselModule, FeatherIcons, CommonModule, CurrencySymbolPipe],
  templateUrl: "./property-box-three.html",
  styleUrls: ["./property-box-three.scss"],
})
export class PropertyBoxThree {
  propertyService = inject(PropertyService);
  private store = inject(Store);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  readonly title = input<string>("");
  readonly data = input<number>(0);
  readonly propertyListingData = input<ILatestForRent>();
  readonly tagClass = input<string>();

  public Options = {
    items: 1,
    loop: true,
    nav: true,
    dots: true,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ],
  };

  addWishlist(data: ILatestForRent) {
    this.store.dispatch(new AddWishlistItem(data));
  }

  addCompare(data: ILatestForRent) {
    this.store.dispatch(new AddCompareItem(data));
  }

  getDetails(id: number) {
    void this.router.navigate(["/property/image-slider"], {
      relativeTo: this.route,
      queryParams: { id: id },
      queryParamsHandling: "merge", // preserve the existing query params in the route
      skipLocationChange: false, // do trigger navigation
    });
  }
}
