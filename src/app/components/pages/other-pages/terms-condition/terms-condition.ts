import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";

import { Breadcrumb } from "../../../../shared/components/ui/breadcrumb/breadcrumb";
import { ITermsConditionDetails } from "../../../../shared/interface/property";
import { PropertyService } from "../../../../shared/services/property.service";

@Component({
  selector: "app-terms-condition",
  templateUrl: "./terms-condition.html",
  styleUrls: ["./terms-condition.scss"],
  imports: [Breadcrumb, CommonModule],
})
export class TermsCondition {
  private propertyService = inject(PropertyService);

  public themeLogo = "assets/images/logo/2.png";
  public footerLogo = "assets/images/logo/footer-logo.png";
  public bgImage = "assets/images/inner-background.jpg";
  public title = "Terms & Conditions";
  public parent = "Home";
  public child = "Terms & Conditions";
  public activeClass = "introduction";

  public termsConditionData: ITermsConditionDetails[];

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

    this.propertyService.termsConditionData().subscribe((response) => {
      this.termsConditionData = response.terms;
    });
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty("--theme-default");
    document.documentElement.style.removeProperty("--theme-default3");
    document.documentElement.style.removeProperty("--theme-default4");
  }

  setPage(value: string) {
    document.getElementById(value)?.scrollIntoView({ behavior: "smooth" });
    this.activeClass = value;
  }
}
