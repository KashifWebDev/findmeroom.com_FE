import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";
import { RouterModule } from "@angular/router";

import { FeatherIcons } from "../../../../../shared/components/ui/feather-icons/feather-icons";
import { ILatestBlog } from "../../../../../shared/interface/property";

@Component({
  selector: "app-blog-page-blogdata",
  templateUrl: "./blog-page-blogdata.html",
  styleUrls: ["./blog-page-blogdata.scss"],
  imports: [FeatherIcons, RouterModule, CommonModule],
})
export class BlogPageBlogdata {
  readonly latestBlogData = input<ILatestBlog>();
  readonly date = input<boolean>(true);
  readonly type = input<string>("");
  readonly masonry = input<boolean>(false);
}
