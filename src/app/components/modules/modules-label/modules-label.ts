import { Component } from "@angular/core";

import { Breadcrumb } from "../../../shared/components/ui/breadcrumb/breadcrumb";
import { ModulesLabelData } from "../../../shared/data/modules";

@Component({
  selector: "app-modules-label",
  imports: [Breadcrumb],
  templateUrl: "./modules-label.html",
  styleUrls: ["./modules-label.scss"],
})
export class ModulesLabel {
  public themeLogo = "assets/images/logo/2.png";
  public footerLogo = "assets/images/logo/footer-logo.png";
  public bgImage = "assets/images/inner-background.jpg";
  public title = "Label";
  public parent = "Modules";
  public child = "Label";

  public ModulesLabelData = ModulesLabelData;

  public theme_default3 = "#ff5c41";
  public theme_default4 = "#ff8c41";
}
