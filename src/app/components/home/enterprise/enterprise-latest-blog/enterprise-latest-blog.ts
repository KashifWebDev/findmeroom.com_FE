import { Component, inject } from "@angular/core";

import { LatestBlog } from "../../../../shared/components/common/latest-blog/latest-blog";
import { Title } from "../../../../shared/components/ui/title/title";
import { ILatestBlog } from "../../../../shared/interface/property";
import { PropertyService } from "../../../../shared/services/property.service";

@Component({
  selector: "app-enterprise-latest-blog",
  imports: [LatestBlog, Title],
  templateUrl: "./enterprise-latest-blog.html",
  styleUrls: ["./enterprise-latest-blog.scss"],
})
export class EnterpriseLatestBlog {
  private propertyService = inject(PropertyService);

  public desc =
    "See why ProCity is one of the best friends for exploring the city.";
  public title = "enterprise";

  public latestBlogData: ILatestBlog[] = [];

  ngOnInit() {
    this.propertyService.latestBlogData().subscribe((response) => {
      this.latestBlogData = response.latestBlog.filter(
        (item) => item.type == this.title,
      );
    });
  }
}
