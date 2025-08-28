import { Component, inject } from "@angular/core";

import { HappyClients } from "../../../shared/components/common/happy-clients/happy-clients";
import { PeopleSay } from "../../../shared/components/common/people-say/people-say";
import { Breadcrumb } from "../../../shared/components/ui/breadcrumb/breadcrumb";
import { Title } from "../../../shared/components/ui/title/title";
import { IHappyClients, IPeopleSay } from "../../../shared/interface/property";
import { PropertyService } from "../../../shared/services/property.service";

@Component({
  selector: "app-modules-testimonial",
  templateUrl: "./modules-testimonial.html",
  styleUrls: ["./modules-testimonial.scss"],
  imports: [Breadcrumb, Title, PeopleSay, HappyClients],
})
export class ModulesTestimonial {
  private propertyService = inject(PropertyService);

  public themeLogo = "assets/images/logo/2.png";
  public footerLogo = "assets/images/logo/footer-logo.png";
  public bgImage = "assets/images/inner-background.jpg";
  public title = "Testimonial";
  public parent = "Modules";
  public child = "Testimonial";

  public desc = "Cum doctus civibus efficiantur in imperdiet deterruisset.";
  public desc2 =
    "Residences can be classified into different type of housing tenure can used for same physical type.";
  public desc3 =
    "Elegant retreat in Coral Gables setting. This home provides entertaining spaces with kitchen opening";

  public testimonialTitle1: string = "enterprise";
  public testimonialTitle2: string = "image_content";
  public testimonialTitle3 = "corporate";
  public testimonialTitle4 = "classic";

  public testimonialData1: IPeopleSay[];
  public testimonialData2: IHappyClients[] = [];
  public testimonialData3: IHappyClients[] = [];
  public testimonialData4: IHappyClients[] = [];

  public theme_default3 = "#ff5c41";
  public theme_default4 = "#ff8c41";
  ngOnInit() {
    this.propertyService.peopleSayData().subscribe((response) => {
      this.testimonialData1 = response.peopleSay.filter(
        (item) => item.type == this.testimonialTitle1,
      );
    });

    this.propertyService.happyClientsData().subscribe((response) => {
      this.testimonialData2 = response.clients.filter((item) =>
        item.type.includes(this.testimonialTitle2),
      );
      this.testimonialData3 = response.clients.filter(
        (item) => item.type == this.testimonialTitle3,
      );
      this.testimonialData4 = response.clients.filter(
        (item) => item.type == this.testimonialTitle4,
      );
    });
  }
}
