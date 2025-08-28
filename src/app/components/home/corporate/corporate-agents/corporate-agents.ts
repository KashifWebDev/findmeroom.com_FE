import { CommonModule } from "@angular/common";
import { Component, inject, input } from "@angular/core";

import { Agents } from "../../../../shared/components/common/agents/agents";
import { Title } from "../../../../shared/components/ui/title/title";
import { IAgents } from "../../../../shared/interface/property";
import { PropertyService } from "../../../../shared/services/property.service";

@Component({
  selector: "app-corporate-agents",
  imports: [Title, Agents, CommonModule],
  templateUrl: "./corporate-agents.html",
  styleUrls: ["./corporate-agents.scss"],
})
export class CorporateAgents {
  private propertyService = inject(PropertyService);

  readonly tagClass = input<string>();
  readonly svgClass = input<boolean>();

  public desc =
    "Elegant retreat in Coral Gables setting. This home provides entertaining spaces with kitchen opening";
  public title = "corporate";
  public agentsData: IAgents[] = [];

  ngOnInit() {
    this.propertyService.agentsData().subscribe((response) => {
      this.agentsData = response.agents.filter(
        (item) => item.type == this.title,
      );
    });
  }
}
