import { Component, inject } from "@angular/core";

import { Agents } from "../../../../shared/components/common/agents/agents";
import { Title } from "../../../../shared/components/ui/title/title";
import { IAgents } from "../../../../shared/interface/property";
import { PropertyService } from "../../../../shared/services/property.service";

@Component({
  selector: "app-classic-agents",
  imports: [Agents, Title],
  templateUrl: "./classic-agents.html",
  styleUrls: ["./classic-agents.scss"],
})
export class ClassicAgents {
  private propertyService = inject(PropertyService);

  public desc =
    "Residences can be classified into different type of housing tenure can used for same physical type.";
  public title = "classic";
  public agentsData: IAgents[] = [];

  ngOnInit() {
    this.propertyService.agentsData().subscribe((response) => {
      this.agentsData = response.agents.filter(
        (item) => item.type == this.title,
      );
    });
  }
}
