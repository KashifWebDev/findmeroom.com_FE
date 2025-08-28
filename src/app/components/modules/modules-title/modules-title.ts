import { Component } from "@angular/core";

import { Breadcrumb } from "../../../shared/components/ui/breadcrumb/breadcrumb";
import { Title } from "../../../shared/components/ui/title/title";
import { modulesTitleData } from "../../../shared/data/modules";

@Component({
  selector: "app-modules-title",
  imports: [Breadcrumb, Title],
  templateUrl: "./modules-title.html",
  styleUrls: ["./modules-title.scss"],
})
export class ModulesTitle {
  public themeLogo = "assets/images/logo/2.png";
  public footerLogo = "assets/images/logo/footer-logo.png";
  public bgImage = "assets/images/inner-background.jpg";
  public title = "Title";
  public parent = "Modules";
  public child = "Title";

  public modulesTitleData = modulesTitleData;

  public theme_default3 = "#ff5c41";
  public theme_default4 = "#ff8c41";

  ngOnInit() {
    document.documentElement.style.setProperty("--theme-default", "#6432b8");
    document.documentElement.style.setProperty("--theme-default2", "#9516d7");
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty("--theme-default");
    document.documentElement.style.removeProperty("--theme-default2");
  }
}
