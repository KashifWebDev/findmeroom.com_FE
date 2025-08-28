import { Component, inject, input } from "@angular/core";

import { LatestBlog } from "../../../../shared/components/common/latest-blog/latest-blog";
import { Title } from "../../../../shared/components/ui/title/title";
import { ILatestBlog } from "../../../../shared/interface/property";
import { PropertyService } from "../../../../shared/services/property.service";

@Component({
  selector: "app-corporate-latest-blog",
  imports: [Title, LatestBlog],
  templateUrl: "./corporate-latest-blog.html",
  styleUrls: ["./corporate-latest-blog.scss"],
})
export class CorporateLatestBlog {
  private propertyService = inject(PropertyService);

  readonly tagClass = input<string>();
  readonly svgClass = input<boolean>();

  public title = "corporate";
  public desc =
    "Elegant retreat in Coral Gables setting. This home provides entertaining spaces with kitchen opening";

  public latestBlogData: ILatestBlog[] = [];

  ngOnInit() {
    this.propertyService.latestBlogData().subscribe((response) => {
      this.latestBlogData = response.latestBlog.filter(
        (item) => item.type == this.title,
      );
    });
  }
}
