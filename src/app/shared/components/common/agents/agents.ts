import { Component, input } from "@angular/core";

import { AgentsOne } from "./agents-one/agents-one";
import { AgentsThree } from "./agents-three/agents-three";
import { AgentsTwo } from "./agents-two/agents-two";
import { IAgents } from "../../../../shared/interface/property";

@Component({
  selector: "app-agents",
  imports: [AgentsOne, AgentsTwo, AgentsThree],
  templateUrl: "./agents.html",
  styleUrls: ["./agents.scss"],
})
export class Agents {
  readonly agentsData = input<IAgents[]>([]);
  readonly type = input<string>("");
  readonly tagClass = input<string>("");
}
