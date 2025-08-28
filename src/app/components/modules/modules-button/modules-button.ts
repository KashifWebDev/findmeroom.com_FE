import { Component } from "@angular/core";

import { Breadcrumb } from "../../../shared/components/ui/breadcrumb/breadcrumb";
import { modulesButtonData } from "../../../shared/data/modules";

@Component({
  selector: "app-modules-button",
  templateUrl: "./modules-button.html",
  styleUrls: ["./modules-button.scss"],
  imports: [Breadcrumb],
})
export class ModulesButton {
  public themeLogo = "assets/images/logo/2.png";
  public footerLogo = "assets/images/logo/footer-logo.png";
  public bgImage = "assets/images/inner-background.jpg";
  public title = "Button";
  public parent = "Modules";
  public child = "Button";

  public theme_default3 = "#ff5c41";
  public theme_default4 = "#ff8c41";

  public modulesButtonData = modulesButtonData;
}
