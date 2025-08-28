import { Component, inject } from "@angular/core";
import { RouterModule } from "@angular/router";

import { LatestBlog } from "../../../../shared/components/common/latest-blog/latest-blog";
import { PeopleSay } from "../../../../shared/components/common/people-say/people-say";
import { ProvidedServices } from "../../../../shared/components/common/provided-services/provided-services";
import { Breadcrumb } from "../../../../shared/components/ui/breadcrumb/breadcrumb";
import { Title } from "../../../../shared/components/ui/title/title";
import {
  ILatestBlog,
  IPeopleSay,
  IProvidedServices,
} from "../../../../shared/interface/property";
import { PropertyService } from "../../../../shared/services/property.service";

@Component({
  selector: "app-services",
  templateUrl: "./services.html",
  styleUrls: ["./services.scss"],
  imports: [
    Breadcrumb,
    Title,
    ProvidedServices,
    PeopleSay,
    LatestBlog,
    RouterModule,
  ],
})
export class Services {
  private propertyService = inject(PropertyService);

  public themeLogo = "assets/images/logo/2.png";
  public footerLogo = "assets/images/logo/footer-logo.png";
  public bgImage = "assets/images/inner-background.jpg";
  public title = "Services";
  public parent = "Home";
  public child = "Services";

  public serviceDesc =
    "Discover New York’s best things to do, restaurants, theatre, nightlife and more";
  public blogDesc =
    "Elegant retreat in Coral Gables setting. This home provides entertaining spaces with kitchen opening";
  public peopleSayDesc =
    "Cum doctus civibus efficiantur in imperdiet deterruisset.";

  public serviceTitle = "enterprise";
  public blogTitle = "corporate";
  public peopleSayTitle = "enterprise";

  public providedServices: IProvidedServices[] = [];
  public latestBlogData: ILatestBlog[] = [];
  public peopleSayData: IPeopleSay[];

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
      this.providedServices = response.services.filter((item) =>
        item.type.includes(this.serviceTitle),
      );
    });

    this.propertyService.latestBlogData().subscribe((response) => {
      this.latestBlogData = response.latestBlog.filter(
        (item) => item.type == this.blogTitle,
      );
    });

    this.propertyService.peopleSayData().subscribe((response) => {
      this.peopleSayData = response.peopleSay.filter(
        (item) => item.type == this.peopleSayTitle,
      );
    });
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty("--theme-default");
    document.documentElement.style.removeProperty("--theme-default3");
    document.documentElement.style.removeProperty("--theme-default4");
  }
}
