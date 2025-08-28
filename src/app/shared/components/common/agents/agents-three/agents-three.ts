import { Component, input } from "@angular/core";
import { RouterModule } from "@angular/router";

import { CarouselModule } from "ngx-owl-carousel-o";

import { IAgents } from "../../../../../shared/interface/property";

@Component({
  selector: "app-agents-three",
  imports: [CarouselModule, RouterModule],
  templateUrl: "./agents-three.html",
  styleUrls: ["./agents-three.scss"],
})
export class AgentsThree {
  readonly agentsData = input<IAgents[]>([]);

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
      668: {
        items: 2,
      },
      924: {
        items: 3,
      },
      1240: {
        items: 4,
      },
    },
  };
}
