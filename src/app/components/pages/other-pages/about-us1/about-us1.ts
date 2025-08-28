import { Component, inject } from "@angular/core";

import { AboutUs1Details } from "./widgets/about-us1-details/about-us1-details";
import { WhyChooseUs } from "./widgets/why-choose-us/why-choose-us";
import { Brand } from "../../../../shared/components/common/brand/brand";
import { HappyClients } from "../../../../shared/components/common/happy-clients/happy-clients";
import { LatestBlog } from "../../../../shared/components/common/latest-blog/latest-blog";
import { Breadcrumb } from "../../../../shared/components/ui/breadcrumb/breadcrumb";
import { Title } from "../../../../shared/components/ui/title/title";
import { whyChooseUsData } from "../../../../shared/data/about-us";
import {
  IBrand,
  IHappyClients,
  ILatestBlog,
} from "../../../../shared/interface/property";
import { PropertyService } from "../../../../shared/services/property.service";

@Component({
  selector: "app-about-us1",
  templateUrl: "./about-us1.html",
  styleUrls: ["./about-us1.scss"],
  imports: [
    Breadcrumb,
    Title,
    AboutUs1Details,
    WhyChooseUs,
    HappyClients,
    LatestBlog,
    Brand,
  ],
})
export class AboutUs1 {
  private propertyService = inject(PropertyService);

  public themeLogo = "assets/images/logo/2.png";
  public footerLogo = "assets/images/logo/footer-logo.png";
  public bgImage = "assets/images/inner-background.jpg";
  public title = "About Us";
  public parent = "Home";
  public child = "About Us";

  public aboutDesc =
    "Residences can be classified into different type of housing tenure can used for same physical type.";
  public chooseUsDesc =
    "Elegant retreat in Coral Gables setting. This home provides entertaining spaces with kitchen opening";
  public happyClientDesc =
    "Residences can be classified into different type of housing tenure can used for same physical type.";
  public blogDesc =
    "Elegant retreat in Coral Gables setting. This home provides entertaining spaces with kitchen opening";

  public whyChooseUsData = whyChooseUsData;

  public clientTitle = "classic";
  public blogTitle = "corporate";
  public brandTitle = "enterprise";

  public happyClientsData: IHappyClients[] = [];
  public latestBlogData: ILatestBlog[] = [];
  public brandData: IBrand[] = [];

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

    this.propertyService.happyClientsData().subscribe((response) => {
      this.happyClientsData = response.clients.filter(
        (item) => item.type == this.clientTitle,
      );
    });

    this.propertyService.latestBlogData().subscribe((response) => {
      this.latestBlogData = response.latestBlog.filter(
        (item) => item.type == this.blogTitle,
      );
    });

    this.propertyService.brandData().subscribe((response) => {
      this.brandData = response.brand.filter(
        (item) => item.type == this.brandTitle,
      );
    });
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty("--theme-default");
    document.documentElement.style.removeProperty("--theme-default3");
    document.documentElement.style.removeProperty("--theme-default4");
  }
}
