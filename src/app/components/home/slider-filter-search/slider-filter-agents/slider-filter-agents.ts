import { CommonModule } from "@angular/common";
import { Component, inject, input } from "@angular/core";

import { Agents } from "../../../../shared/components/common/agents/agents";
import { Title } from "../../../../shared/components/ui/title/title";
import { IAgents } from "../../../../shared/interface/property";
import { PropertyService } from "../../../../shared/services/property.service";

@Component({
  selector: "app-slider-filter-agents",
  imports: [Title, Agents, CommonModule],
  templateUrl: "./slider-filter-agents.html",
  styleUrls: ["./slider-filter-agents.scss"],
})
export class SliderFilterAgents {
  private propertyService = inject(PropertyService);

  readonly tagClass = input<string>("");
  readonly title = input<string>();
  readonly sectionClass = input<string>();

  public agentsData: IAgents[] = [];

  ngOnInit() {
    this.propertyService.agentsData().subscribe((response) => {
      this.agentsData = response.agents.filter((item) =>
        item.type.includes(this.title()!),
      );
    });
  }
}
