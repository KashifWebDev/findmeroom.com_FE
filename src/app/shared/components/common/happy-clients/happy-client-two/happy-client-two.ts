import { Component, input } from "@angular/core";

import { CarouselModule } from "ngx-owl-carousel-o";

import { IHappyClients } from "../../../../../shared/interface/property";

@Component({
  selector: "app-happy-client-two",
  imports: [CarouselModule],
  templateUrl: "./happy-client-two.html",
  styleUrls: ["./happy-client-two.scss"],
})
export class HappyClientTwo {
  readonly happyClientsData = input<IHappyClients[]>([]);
  readonly tagClass = input<string>();

  public Options = {
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeOut: 1500,
    responsive: {
      0: {
        items: 1,
      },
    },
  };
}
