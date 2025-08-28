import { Component, input } from "@angular/core";

import { LatestBlogOne } from "./latest-blog-one/latest-blog-one";
import { LatestBlogTwo } from "./latest-blog-two/latest-blog-two";
import { ILatestBlog } from "../../../../shared/interface/property";

@Component({
  selector: "app-latest-blog",
  imports: [LatestBlogOne, LatestBlogTwo],
  templateUrl: "./latest-blog.html",
  styleUrls: ["./latest-blog.scss"],
})
export class LatestBlog {
  readonly latestBlogData = input<ILatestBlog[]>([]);
  readonly type = input<string>("");
  readonly tagClass = input<string>();
}
