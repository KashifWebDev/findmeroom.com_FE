import { Component } from "@angular/core";

import { ComparePropertyData } from "./compare-property-data/compare-property-data";
import { Breadcrumb } from "../../../../shared/components/ui/breadcrumb/breadcrumb";

@Component({
  selector: "app-compare-property",
  templateUrl: "./compare-property.html",
  styleUrls: ["./compare-property.scss"],
  imports: [Breadcrumb, ComparePropertyData],
})
export class CompareProperty {
  public themeLogo = "assets/images/logo/2.png";
  public footerLogo = "assets/images/logo/footer-logo.png";
  public bgImage = "assets/images/inner-background.jpg";
  public title = "Property Compare";
  public parent = "Home";
  public child = "Compare Property";

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
