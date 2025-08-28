import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import { AnimationDots } from "../../../../shared/components/common/home-section-slider/animation-dots/animation-dots";
import { FilterBoxTwo } from "../../../../shared/components/common/home-section-slider/filter-box-two/filter-box-two";

@Component({
  selector: "app-search-tab-home-section",
  imports: [CommonModule, FilterBoxTwo, AnimationDots],
  templateUrl: "./search-tab-home-section.html",
  styleUrls: ["./search-tab-home-section.scss"],
})
export class SearchTabHomeSection {
  public active = 1;
  public openTab: string = "sell";

  public tabbed(val: string) {
    this.openTab = val;
  }
}
