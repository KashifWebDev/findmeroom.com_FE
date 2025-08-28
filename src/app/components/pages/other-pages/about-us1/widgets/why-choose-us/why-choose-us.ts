import { Component, input } from "@angular/core";

import { FeatherIcons } from "../../../../../../shared/components/ui/feather-icons/feather-icons";
import { IWhyChooseUs } from "../../../../../../shared/data/about-us";

@Component({
  selector: "app-why-choose-us",
  imports: [FeatherIcons],
  templateUrl: "./why-choose-us.html",
  styleUrls: ["./why-choose-us.scss"],
})
export class WhyChooseUs {
  readonly whyChooseUsData = input<IWhyChooseUs>();
}
