import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";
import { RouterModule } from "@angular/router";

import { CarouselModule } from "ngx-owl-carousel-o";

import { IAgents } from "../../../../../shared/interface/property";
import { FeatherIcons } from "../../../ui/feather-icons/feather-icons";

@Component({
  selector: "app-agents-two",
  imports: [CarouselModule, FeatherIcons, RouterModule, CommonModule],
  templateUrl: "./agents-two.html",
  styleUrls: ["./agents-two.scss"],
})
export class AgentsTwo {
  readonly agentsData = input<IAgents[]>([]);
  readonly tagClass = input<string>();

  public Options = {
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
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
