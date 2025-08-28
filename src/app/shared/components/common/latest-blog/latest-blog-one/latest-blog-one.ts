import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";
import { RouterModule } from "@angular/router";

import { CarouselModule } from "ngx-owl-carousel-o";

import { ILatestBlog } from "../../../../../shared/interface/property";
import { FeatherIcons } from "../../../ui/feather-icons/feather-icons";

@Component({
  selector: "app-latest-blog-one",
  imports: [CarouselModule, FeatherIcons, RouterModule, CommonModule],
  templateUrl: "./latest-blog-one.html",
  styleUrls: ["./latest-blog-one.scss"],
})
export class LatestBlogOne {
  readonly latestBlogData = input<ILatestBlog[]>([]);
  readonly tagClass = input<string>();

  public Options = {
    loop: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      668: {
        items: 2,
      },
      1240: {
        items: 3,
      },
    },
  };
}
