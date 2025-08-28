import { Component } from "@angular/core";

import { Breadcrumb } from "../../../../shared/components/ui/breadcrumb/breadcrumb";
import { FeatherIcons } from "../../../../shared/components/ui/feather-icons/feather-icons";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.html",
  styleUrls: ["./forgot-password.scss"],
  imports: [Breadcrumb, FeatherIcons],
})
export class ForgotPassword {
  public themeLogo = "assets/images/logo/2.png";
  public footerLogo = "assets/images/logo/footer-logo.png";
  public bgImage = "assets/images/inner-background.jpg";
  public title = "Forgot Password";
  public parent = "Home";
  public child = "Forgot Password";

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
