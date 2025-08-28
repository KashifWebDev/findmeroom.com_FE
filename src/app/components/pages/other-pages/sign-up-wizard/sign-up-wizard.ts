import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import { WizardStep } from "./widgets/wizard-step/wizard-step";
import { Breadcrumb } from "../../../../shared/components/ui/breadcrumb/breadcrumb";
import { stepsData } from "../../../../shared/data/sign-up-wizard";
import {
  IAccountInformation,
  IAddressInformation,
} from "../../../../shared/interface/property";
import { AccountInformation } from "../widgets/account-information/account-information";
import { AddressInformation } from "../widgets/address-information/address-information";
import { CompletedForm } from "../widgets/completed-form/completed-form";

@Component({
  selector: "app-sign-up-wizard",
  templateUrl: "./sign-up-wizard.html",
  styleUrls: ["./sign-up-wizard.scss"],
  imports: [
    Breadcrumb,
    WizardStep,
    AccountInformation,
    AddressInformation,
    CompletedForm,
    CommonModule,
  ],
})
export class SignUpWizard {
  public themeLogo = "assets/images/logo/2.png";
  public footerLogo = "assets/images/logo/footer-logo.png";
  public bgImage = "assets/images/inner-background.jpg";
  public title = "Sign up wizard";
  public parent = "Home";
  public child = "Sign up wizard";

  public stepsData = stepsData;

  public activeSteps: number;
  public accountData: IAccountInformation;
  public addressData: IAddressInformation;

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

    const data = stepsData.filter((data) => {
      return data.stepNumber === 1;
    });
    this.activeSteps = data[0].stepNumber;
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty("--theme-default");
    document.documentElement.style.removeProperty("--theme-default3");
    document.documentElement.style.removeProperty("--theme-default4");
  }

  receiveChildData(step: number) {
    this.activeSteps = step;
  }

  receiveFormData(formData: IAccountInformation) {
    this.accountData = formData;
  }

  receiveAddressData(formData: IAddressInformation) {
    this.addressData = formData;
  }
}
