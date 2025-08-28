import { Component } from "@angular/core";

import { FilterBox } from "../../../../shared/components/common/home-section-slider/filter-box/filter-box";

@Component({
  selector: "app-modern-home-section",
  imports: [FilterBox],
  templateUrl: "./modern-home-section.html",
  styleUrls: ["./modern-home-section.scss"],
})
export class ModernHomeSection {}
