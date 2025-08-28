import { Component } from "@angular/core";

import { UserDetails } from "./user-details/user-details";
import { Breadcrumb } from "../../../../shared/components/ui/breadcrumb/breadcrumb";
import { UserInfo } from "../widgets/user-info/user-info";
import { UserPanelSideMenu } from "../widgets/user-panel-side-menu/user-panel-side-menu";

@Component({
  selector: "app-my-profile",
  templateUrl: "./my-profile.html",
  styleUrls: ["./my-profile.scss"],
  imports: [Breadcrumb, UserInfo, UserPanelSideMenu, UserDetails],
})
export class MyProfile {
  public themeLogo = "assets/images/logo/2.png";
  public footerLogo = "assets/images/logo/footer-logo.png";
  public bgImage = "assets/images/inner-background.jpg";
  public title = "Dashboard";
  public parent = "Home";
  public child = "My Profile";

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
