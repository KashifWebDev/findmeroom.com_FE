import { Component, inject, input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { Store } from "@ngxs/store";
import { Gallery, ImageSize, ThumbnailsPosition } from "ng-gallery";
import { Lightbox } from "ng-gallery/lightbox";

import { ImageSlider } from "./image-slider/image-slider";
import { ILatestForRent } from "../../../../../shared/interface/property";
import { PropertyBoxGridService } from "../../../../../shared/services/property-box-grid.service";
import { PropertyService } from "../../../../../shared/services/property.service";
import { AddCompareItem } from "../../../../../shared/store/actions/compare.action";
import { CurrencySymbolPipe } from "../../../../pipe/currency-symbol.pipe";
import { AddWishlistItem } from "../../../../store/actions/wishlist.action";
import { FeatherIcons } from "../../../ui/feather-icons/feather-icons";

@Component({
  selector: "app-property-box-two",
  imports: [ImageSlider, FeatherIcons, CurrencySymbolPipe],
  templateUrl: "./property-box-two.html",
  styleUrls: ["./property-box-two.scss"],
})
export class PropertyBoxTwo {
  gallery = inject(Gallery);
  lightbox = inject(Lightbox);
  private propertyBoxGridService = inject(PropertyBoxGridService);
  propertyService = inject(PropertyService);
  private store = inject(Store);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  readonly title = input<string>("");
  readonly latestForRentData = input<ILatestForRent>();
  readonly textColor = input<boolean>(false);
  readonly tagClass = input<string>();
  readonly data = input<number>();
  readonly listView = input<boolean>(false);
  readonly thumbnail = input<boolean>(false);
  readonly thumbnail_video = input<boolean>(false);
  readonly gridImages = input<boolean>(false);

  public listViewBox: boolean = false;
  public col_lg_6: boolean = true;
  public col_md_6: boolean = true;
  public col_lg_4: boolean = false;
  public col_xxl_3: boolean = false;
  public col_6: boolean = false;
  public col_xl_12: boolean = false;
  public col_md_12: boolean = false;

  public favouriteData: ILatestForRent[] = [];

  ngOnInit() {
    const lightboxRef = this.gallery.ref("lightbox");

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });
  }

  ngDoCheck() {
    this.col_lg_6 = this.propertyBoxGridService.col_lg_6;
    this.col_md_6 = this.propertyBoxGridService.col_md_6;
    this.col_lg_4 = this.propertyBoxGridService.col_lg_4;
    this.col_xxl_3 = this.propertyBoxGridService.col_xxl_3;
    this.col_6 = this.propertyBoxGridService.col_6;
    this.col_xl_12 = this.propertyBoxGridService.col_xl_12;
  }

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
