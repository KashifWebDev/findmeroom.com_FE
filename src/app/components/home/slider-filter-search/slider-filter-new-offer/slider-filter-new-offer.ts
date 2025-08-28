import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";

import { NewOffer } from "../../../../shared/components/common/new-offer/new-offer";
import { Title } from "../../../../shared/components/ui/title/title";

@Component({
  selector: "app-slider-filter-new-offer",
  imports: [Title, NewOffer, CommonModule],
  templateUrl: "./slider-filter-new-offer.html",
  styleUrls: ["./slider-filter-new-offer.scss"],
})
export class SliderFilterNewOffer {
  readonly tagClass = input<string>("");
  readonly title = input<string>();
  readonly sectionClass = input<string>();
}
