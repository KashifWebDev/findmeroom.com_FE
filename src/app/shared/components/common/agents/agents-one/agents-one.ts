import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";
import { RouterModule } from "@angular/router";

import { CarouselModule } from "ngx-owl-carousel-o";

import { IAgents } from "../../../../../shared/interface/property";
import { FeatherIcons } from "../../../ui/feather-icons/feather-icons";

@Component({
  selector: "app-agents-one",
  imports: [CarouselModule, FeatherIcons, RouterModule, CommonModule],
  templateUrl: "./agents-one.html",
  styleUrls: ["./agents-one.scss"],
})
export class AgentsOne {
  readonly agentsData = input<IAgents[]>([]);
  readonly tagClass = input<string>("");

  public Options = {
    loop: true,
    nav: true,
    dots: false,
    margin: 25,
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
    },
  };
}
