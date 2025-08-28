import { Component, inject } from "@angular/core";

import { Breadcrumb } from "../../../../shared/components/ui/breadcrumb/breadcrumb";
import { IBlogDetails, IComments } from "../../../../shared/interface/property";
import { PropertyService } from "../../../../shared/services/property.service";
import { BlogPageFilter } from "../../blog-page/widgets/blog-page-filter/blog-page-filter";
import { BlogDetail } from "../widgets/blog-detail/blog-detail";
import { BlogDetailComments } from "../widgets/blog-detail-comments/blog-detail-comments";
import { BlogDetailLeaveComments } from "../widgets/blog-detail-leave-comments/blog-detail-leave-comments";

@Component({
  selector: "app-blog-details-right-sidebar",
  templateUrl: "./blog-details-right-sidebar.html",
  styleUrls: ["./blog-details-right-sidebar.scss"],
  imports: [
    Breadcrumb,
    BlogDetail,
    BlogDetailComments,
    BlogDetailLeaveComments,
    BlogPageFilter,
  ],
})
export class BlogDetailsRightSidebar {
  private propertyService = inject(PropertyService);

  public themeLogo = "assets/images/logo/2.png";
  public footerLogo = "assets/images/logo/footer-logo.png";
  public bgImage = "assets/images/inner-background.jpg";
  public title = "Blog";
  public parent = "Home";
  public child = "Blog";

  public blogDetails: IBlogDetails[];
  public commentsData: IComments[];

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

    this.propertyService.blogDetailsData().subscribe((response) => {
      this.blogDetails = response.blogDetails;
      this.commentsData = response.commentsData;
    });
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty("--theme-default");
    document.documentElement.style.removeProperty("--theme-default3");
    document.documentElement.style.removeProperty("--theme-default4");
  }
}
