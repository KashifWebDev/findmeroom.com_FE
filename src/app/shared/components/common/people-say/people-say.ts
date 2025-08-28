import { Component, input } from "@angular/core";

import { CarouselModule } from "ngx-owl-carousel-o";

import { IPeopleSay } from "../../../../shared/interface/property";

@Component({
  selector: "app-people-say",
  imports: [CarouselModule],
  templateUrl: "./people-say.html",
  styleUrls: ["./people-say.scss"],
})
export class PeopleSay {
  readonly peopleSayData = input<IPeopleSay[]>();

  public Options = {
    center: true,
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeOut: 700,
    margin: 25,
    responsive: {
      0: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };
}
