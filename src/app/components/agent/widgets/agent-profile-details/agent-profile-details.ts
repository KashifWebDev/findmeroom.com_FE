import { Component, input } from "@angular/core";

import { FeatherIcons } from "../../../../shared/components/ui/feather-icons/feather-icons";
import { IAgency } from "../../../../shared/interface/property";

@Component({
  selector: "app-agent-profile-details",
  imports: [FeatherIcons],
  templateUrl: "./agent-profile-details.html",
  styleUrls: ["./agent-profile-details.scss"],
})
export class AgentProfileDetails {
  readonly agentsDetails = input<IAgency>();
}
