import { Component, inject } from "@angular/core";

import { CommonPropertyFilterListing } from "../../../../shared/components/common/widgets/common-property-filter-listing/common-property-filter-listing";
import { Breadcrumb } from "../../../../shared/components/ui/breadcrumb/breadcrumb";
import { IPagination } from "../../../../shared/interface/property";
import { PropertyBoxGridService } from "../../../../shared/services/property-box-grid.service";
import { PropertyService } from "../../../../shared/services/property.service";

@Component({
  selector: "app-list-view-thumbnail-image",
  templateUrl: "./list-view-thumbnail-image.html",
  styleUrls: ["./list-view-thumbnail-image.scss"],
  imports: [Breadcrumb, CommonPropertyFilterListing],
})
export class ListViewThumbnailImage {
  private propertyBoxGridService = inject(PropertyBoxGridService);
  propertyService = inject(PropertyService);

  public themeLogo = "assets/images/logo/2.png";
  public footerLogo = "assets/images/logo/footer-logo.png";
  public bgImage = "assets/images/inner-background.jpg";
  public title = "Thumbnail Image";
  public parent = "Listing";
  public child = "Thumbnail Image";

  public listView: boolean = false;
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
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty("--theme-default");
    document.documentElement.style.removeProperty("--theme-default3");
    document.documentElement.style.removeProperty("--theme-default4");
  }

  ngDoCheck() {
    this.listView = this.propertyBoxGridService.listView;
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
