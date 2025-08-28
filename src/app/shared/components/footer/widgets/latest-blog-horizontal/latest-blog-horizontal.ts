import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { CarouselModule } from "ngx-owl-carousel-o";

import { blogDataHorizontal } from "../../../../data/footer";

@Component({
  selector: "app-latest-blog-horizontal",
  imports: [CarouselModule, RouterModule],
  templateUrl: "./latest-blog-horizontal.html",
  styleUrl: "./latest-blog-horizontal.scss",
})
export class LatestBlogHorizontal {
  public blogDataHorizontal = blogDataHorizontal;

  public options = {
    loop: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      900: {
        items: 3,
      },
    },
  };
}
