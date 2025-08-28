import { Component, inject } from "@angular/core";

import { Breadcrumb } from "../../../../shared/components/ui/breadcrumb/breadcrumb";
import { ILatestBlog } from "../../../../shared/interface/property";
import { PropertyService } from "../../../../shared/services/property.service";
import { BlogPageBlogdata } from "../widgets/blog-page-blogdata/blog-page-blogdata";
import { BlogPageFilter } from "../widgets/blog-page-filter/blog-page-filter";

@Component({
  selector: "app-blog-page-creative-left-sidebar",
  templateUrl: "./blog-page-creative-left-sidebar.html",
  styleUrls: ["./blog-page-creative-left-sidebar.scss"],
  imports: [Breadcrumb, BlogPageFilter, BlogPageBlogdata],
})
export class BlogPageCreativeLeftSidebar {
  private propertyService = inject(PropertyService);

  public themeLogo = "assets/images/logo/2.png";
  public footerLogo = "assets/images/logo/footer-logo.png";
  public bgImage = "assets/images/inner-background.jpg";
  public title = "Blog";
  public parent = "Home";
  public child = "Blog";

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

    this.propertyService.latestBlogData().subscribe((response) => {
      this.latestBlogData = response.latestBlog.filter(
        (item) => item.type == "corporate",
      );
    });
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty("--theme-default");
    document.documentElement.style.removeProperty("--theme-default3");
    document.documentElement.style.removeProperty("--theme-default4");
  }
}
