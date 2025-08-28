import { Component, inject } from "@angular/core";

import { LatestBlog } from "../../../shared/components/common/latest-blog/latest-blog";
import { Breadcrumb } from "../../../shared/components/ui/breadcrumb/breadcrumb";
import { Title } from "../../../shared/components/ui/title/title";
import { ILatestBlog } from "../../../shared/interface/property";
import { PropertyService } from "../../../shared/services/property.service";

@Component({
  selector: "app-modules-blog",
  templateUrl: "./modules-blog.html",
  styleUrls: ["./modules-blog.scss"],
  imports: [Breadcrumb, Title, LatestBlog],
})
export class ModulesBlog {
  private propertyService = inject(PropertyService);

  public themeLogo = "assets/images/logo/2.png";
  public footerLogo = "assets/images/logo/footer-logo.png";
  public bgImage = "assets/images/inner-background.jpg";
  public title = "Blog";
  public parent = "Modules";
  public child = "Blog";

  public desc =
    "Discover New York’s best things to do, restaurants, theatre, nightlife and more";
  public desc2 =
    "Elegant retreat in Coral Gables setting. This home provides entertaining spaces with kitchen opening";

  public blogTitle = "enterprise";
  public blogTitle2 = "corporate";

  public latestBlogData: ILatestBlog[] = [];
  public latestBlogData2: ILatestBlog[] = [];

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

    this.propertyService.latestBlogData().subscribe((response) => {
      this.latestBlogData = response.latestBlog.filter(
        (item) => item.type == this.blogTitle,
      );
      this.latestBlogData2 = response.latestBlog.filter(
        (item) => item.type == this.blogTitle2,
      );
    });
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty("--theme-default");
    document.documentElement.style.removeProperty("--theme-default3");
    document.documentElement.style.removeProperty("--theme-default4");
  }
}
