import { Component, inject, input } from "@angular/core";

import { CommonFilterListing } from "../../../../shared/components/common/widgets/common-filter-listing/common-filter-listing";
import { Breadcrumb } from "../../../../shared/components/ui/breadcrumb/breadcrumb";
import { PropertyBoxGridService } from "../../../../shared/services/property-box-grid.service";
import { CommonTabPropertyBox } from "../widgets/common-tab-property-box/common-tab-property-box";

@Component({
  selector: "app-tab-full-width",
  templateUrl: "./tab-full-width.html",
  styleUrls: ["./tab-full-width.scss"],
  imports: [Breadcrumb, CommonFilterListing, CommonTabPropertyBox],
})
export class TabFullWidth {
  private propertyBoxGridService = inject(PropertyBoxGridService);

  readonly newItemEvent = input<string>();

  public themeLogo = "assets/images/logo/2.png";
  public footerLogo = "assets/images/logo/footer-logo.png";
  public bgImage = "assets/images/inner-background.jpg";
  public title = "Tab Full Width";
  public parent = "Listing";
  public child = "Tab Full Width";

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
