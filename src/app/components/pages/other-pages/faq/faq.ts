import { Component, inject } from "@angular/core";

import { NgbAccordionModule } from "@ng-bootstrap/ng-bootstrap";

import { Breadcrumb } from "../../../../shared/components/ui/breadcrumb/breadcrumb";
import { IFaq } from "../../../../shared/interface/property";
import { PropertyService } from "../../../../shared/services/property.service";

@Component({
  selector: "app-faq",
  templateUrl: "./faq.html",
  styleUrls: ["./faq.scss"],
  imports: [NgbAccordionModule, Breadcrumb],
})
export class Faq {
  private propertyService = inject(PropertyService);

  public themeLogo = "assets/images/logo/2.png";
  public footerLogo = "assets/images/logo/footer-logo.png";
  public bgImage = "assets/images/inner-background.jpg";
  public title = "Faq";
  public parent = "Home";
  public child = "Faq";

  public faqData: IFaq[];

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

    this.propertyService.faqData().subscribe((response) => {
      this.faqData = response.faq;
    });
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty("--theme-default");
    document.documentElement.style.removeProperty("--theme-default3");
    document.documentElement.style.removeProperty("--theme-default4");
  }
}
