import { Component, input } from "@angular/core";
import { RouterModule } from "@angular/router";

import { CarouselModule } from "ngx-owl-carousel-o";

import { ILatestBlog } from "../../../../../shared/interface/property";

@Component({
  selector: "app-latest-blog-two",
  imports: [CarouselModule, RouterModule],
  templateUrl: "./latest-blog-two.html",
  styleUrls: ["./latest-blog-two.scss"],
})
export class LatestBlogTwo {
  readonly latestBlogData = input<ILatestBlog[]>();

  public Options = {
    loop: true,
    nav: true,
    dots: false,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  };
}
