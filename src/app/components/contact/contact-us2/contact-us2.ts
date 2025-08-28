import { Component } from "@angular/core";

import { Breadcrumb } from "../../../shared/components/ui/breadcrumb/breadcrumb";
import { contactDetailsData } from "../../../shared/data/contact-us";
import { ContactDetails } from "../widgets/contact-details/contact-details";
import { ContactUsForm } from "../widgets/contact-us-form/contact-us-form";
import { DownloadApp } from "../widgets/download-app/download-app";

@Component({
  selector: "app-contact-us2",
  templateUrl: "./contact-us2.html",
  styleUrls: ["./contact-us2.scss"],
  imports: [Breadcrumb, ContactUsForm, ContactDetails, DownloadApp],
})
export class ContactUs2 {
  public themeLogo = "assets/images/logo/2.png";
  public footerLogo = "assets/images/logo/footer-logo.png";
  public bgImage = "assets/images/inner-background.jpg";
  public title = "Contact Us";
  public parent = "Home";
  public child = "Contact Us";

  public contactDetailsData = contactDetailsData;

  public theme_default3 = "#ff5c41";
  public theme_default4 = "#ff8c41";

  public detailsArray = ["where", "online_service"];

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

    if (Array.isArray(this.detailsArray)) {
      if (Array.isArray(this.contactDetailsData)) {
        this.contactDetailsData = this.contactDetailsData.filter((data) =>
          this.detailsArray.includes(data.value),
        );
      }
    }
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty("--theme-default");
    document.documentElement.style.removeProperty("--theme-default3");
    document.documentElement.style.removeProperty("--theme-default4");
  }
}
