import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";
import { RouterModule } from "@angular/router";

import { CarouselModule } from "ngx-owl-carousel-o";

import { IHappyClients } from "../../../../../shared/interface/property";

@Component({
  selector: "app-happy-client-one",
  imports: [CarouselModule, RouterModule, CommonModule],
  templateUrl: "./happy-client-one.html",
  styleUrls: ["./happy-client-one.scss"],
})
export class HappyClientOne {
  readonly happyClientsData = input<IHappyClients[]>([]);
  readonly tagClass = input<string>("");

  public Options = {
    loop: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeOut: 500,
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
