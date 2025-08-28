import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import { Breadcrumb } from "../../../shared/components/ui/breadcrumb/breadcrumb";
import { addPropertyStepsData } from "../../../shared/data/add-property";
import { AddPropertySteps } from "../widgets/add-property-steps/add-property-steps";
import { PropertyAddressDetails } from "../widgets/property-address-details/property-address-details";
import { PropertyConfirmation } from "../widgets/property-confirmation/property-confirmation";
import { PropertyGallery } from "../widgets/property-gallery/property-gallery";
import { PropertyGeneralDetails } from "../widgets/property-general-details/property-general-details";

@Component({
  selector: "app-submit-property",
  templateUrl: "./submit-property.html",
  styleUrls: ["./submit-property.scss"],
  imports: [
    Breadcrumb,
    AddPropertySteps,
    PropertyGeneralDetails,
    PropertyAddressDetails,
    PropertyGallery,
    PropertyConfirmation,
    CommonModule,
  ],
})
export class SubmitProperty {
  public themeLogo = "assets/images/logo/2.png";
  public footerLogo = "assets/images/logo/footer-logo.png";
  public bgImage = "assets/images/inner-background.jpg";
  public title = "Add Property";
  public parent = "Home";
  public child = "Add Property";

  public addPropertyStepsData = addPropertyStepsData;
  public activeSteps: number;

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

    const data = addPropertyStepsData.filter((data) => {
      return data.stepNumber === 1;
    });
    this.activeSteps = data[0].stepNumber;
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty("--theme-default");
    document.documentElement.style.removeProperty("--theme-default3");
    document.documentElement.style.removeProperty("--theme-default4");
  }

  public receiveChildData(step: number) {
    this.activeSteps = step;
  }
}
