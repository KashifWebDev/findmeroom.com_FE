import { Component, inject } from "@angular/core";

import { AboutUs2Details } from "./widgets/about-us2-details/about-us2-details";
import { Agents } from "../../../../shared/components/common/agents/agents";
import { LatestBlog } from "../../../../shared/components/common/latest-blog/latest-blog";
import { PeopleSay } from "../../../../shared/components/common/people-say/people-say";
import { ProvidedServices } from "../../../../shared/components/common/provided-services/provided-services";
import { Breadcrumb } from "../../../../shared/components/ui/breadcrumb/breadcrumb";
import { Title } from "../../../../shared/components/ui/title/title";
import {
  IAgents,
  ILatestBlog,
  IPeopleSay,
  IProvidedServices,
} from "../../../../shared/interface/property";
import { PropertyService } from "../../../../shared/services/property.service";

@Component({
  selector: "app-about-us2",
  templateUrl: "./about-us2.html",
  styleUrls: ["./about-us2.scss"],
  imports: [
    Breadcrumb,
    Title,
    ProvidedServices,
    Agents,
    PeopleSay,
    LatestBlog,
    AboutUs2Details,
  ],
})
export class AboutUs2 {
  private propertyService = inject(PropertyService);

  public themeLogo = "assets/images/logo/2.png";
  public footerLogo = "assets/images/logo/footer-logo.png";
  public bgImage = "assets/images/parallax/3.jpg";
  public title = "About Us";
  public parent = "Home";
  public child = "About Us";
  public tagClass = "color-2";

  public aboutDesc =
    "Elegant retreat in Coral Gables setting. This home provides entertaining spaces with kitchen opening";
  public providedServiceDesc =
    "Residences can be classified into different type of housing tenure can used for same physical type.";
  public agentsDesc =
    "Discover New York’s best things to do, restaurants, theatre, nightlife and more";
  public peopleSayDesc =
    "Cum doctus civibus efficiantur in imperdiet deterruisset.";
  public blogDesc =
    "Elegant retreat in Coral Gables setting. This home provides entertaining spaces with kitchen opening";

  public serviceTitle = "corporate";
  public agentsTitle = "slider_filter_search";
  public peopleSayTitle = "enterprise";
  public blogTitle = "corporate";

  public providedServices: IProvidedServices[] = [];
  public agentsData: IAgents[] = [];
  public peopleSayData: IPeopleSay[];
  public latestBlogData: ILatestBlog[] = [];

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

    this.propertyService.providesServices().subscribe((response) => {
      this.providedServices = response.services.filter(
        (item) => item.type == this.serviceTitle,
      );
    });

    this.propertyService.agentsData().subscribe((response) => {
      this.agentsData = response.agents.filter((item) =>
        item.type.includes(this.agentsTitle),
      );
    });

    this.propertyService.peopleSayData().subscribe((response) => {
      this.peopleSayData = response.peopleSay.filter(
        (item) => item.type == this.peopleSayTitle,
      );
    });

    this.propertyService.latestBlogData().subscribe((response) => {
      this.latestBlogData = response.latestBlog.filter(
        (item) => item.type == this.blogTitle,
      );
    });
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty("--theme-default");
    document.documentElement.style.removeProperty("--theme-default3");
    document.documentElement.style.removeProperty("--theme-default4");
  }
}
