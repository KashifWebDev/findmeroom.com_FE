import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { blogData } from "../../../../data/footer";

@Component({
  selector: "app-latest-blog-vertical",
  imports: [CommonModule, RouterModule],
  templateUrl: "./latest-blog-vertical.html",
  styleUrls: ["./latest-blog-vertical.scss"],
})
export class LatestBlogVertical {
  public blogData = blogData;
  public isBlogData: boolean = false;

  openBlog() {
    this.isBlogData = !this.isBlogData;
  }
}
