import { Component, inject } from "@angular/core";

import { CommonPropertyFilterListing } from "../../../../../shared/components/common/widgets/common-property-filter-listing/common-property-filter-listing";
import { Breadcrumb } from "../../../../../shared/components/ui/breadcrumb/breadcrumb";
import { PropertyBoxGridService } from "../../../../../shared/services/property-box-grid.service";

@Component({
  selector: "app-grid3-left-sidebar",
  imports: [Breadcrumb, CommonPropertyFilterListing],
  templateUrl: "./grid3-left-sidebar.html",
  styleUrls: ["./grid3-left-sidebar.scss"],
})
export class Grid3LeftSidebar {
  private propertyBoxGridService = inject(PropertyBoxGridService);

  public themeLogo = "assets/images/logo/2.png";
  public footerLogo = "assets/images/logo/footer-logo.png";
  public bgImage = "assets/images/inner-background.jpg";
  public title = "Left sidebar";
  public parent = "Listing";
  public child = "Left sidebar";

  public listView: boolean = false;

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
}
