import { Component, input } from "@angular/core";
import { RouterModule } from "@angular/router";

import { CarouselModule } from "ngx-owl-carousel-o";

import { IHappyClients } from "../../../../../shared/interface/property";

@Component({
  selector: "app-happy-client-three",
  imports: [CarouselModule, RouterModule],
  templateUrl: "./happy-client-three.html",
  styleUrls: ["./happy-client-three.scss"],
})
export class HappyClientThree {
  readonly happyClientsData = input<IHappyClients[]>([]);

  public Options = {
    loop: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeOut: 1000,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
    },
  };
}
