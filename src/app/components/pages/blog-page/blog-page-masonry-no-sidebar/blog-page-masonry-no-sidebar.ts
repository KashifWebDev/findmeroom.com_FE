import { Component, inject } from "@angular/core";

import { NgxMasonryModule, NgxMasonryOptions } from "ngx-masonry";

import { Breadcrumb } from "../../../../shared/components/ui/breadcrumb/breadcrumb";
import { ILatestBlog } from "../../../../shared/interface/property";
import { PropertyService } from "../../../../shared/services/property.service";
import { BlogPageBlogdata } from "../widgets/blog-page-blogdata/blog-page-blogdata";

@Component({
  selector: "app-blog-page-masonry-no-sidebar",
  templateUrl: "./blog-page-masonry-no-sidebar.html",
  styleUrls: ["./blog-page-masonry-no-sidebar.scss"],
  imports: [Breadcrumb, BlogPageBlogdata, NgxMasonryModule],
})
export class BlogPageMasonryNoSidebar {
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

  public masonryOptions: NgxMasonryOptions = {
    gutter: 30,
  };

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
