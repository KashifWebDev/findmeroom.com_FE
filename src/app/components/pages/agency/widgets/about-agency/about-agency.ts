import { Component, input } from "@angular/core";

import { FeatherIcons } from "../../../../../shared/components/ui/feather-icons/feather-icons";
import { IAgency } from "../../../../../shared/interface/property";

@Component({
  selector: "app-about-agency",
  imports: [FeatherIcons],
  templateUrl: "./about-agency.html",
  styleUrls: ["./about-agency.scss"],
})
export class AboutAgency {
  readonly aboutAgency = input<IAgency>();
}
