import { Component } from "@angular/core";

import { CommonFilterListing } from "../../../../shared/components/common/widgets/common-filter-listing/common-filter-listing";
import { Breadcrumb } from "../../../../shared/components/ui/breadcrumb/breadcrumb";
import { CommonTabPropertyBox } from "../widgets/common-tab-property-box/common-tab-property-box";

@Component({
  selector: "app-tab-left-sidebar",
  templateUrl: "./tab-left-sidebar.html",
  styleUrls: ["./tab-left-sidebar.scss"],
  imports: [Breadcrumb, CommonFilterListing, CommonTabPropertyBox],
})
export class TabLeftSidebar {
  public themeLogo = "assets/images/logo/2.png";
  public footerLogo = "assets/images/logo/footer-logo.png";
  public bgImage = "assets/images/inner-background.jpg";
  public title = "Left Sidebar";
  public parent = "Listing";
  public child = "Left Sidebar";

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
}
