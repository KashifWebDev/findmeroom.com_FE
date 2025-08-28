import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";
import { RouterModule } from "@angular/router";

import { IAgencyAgent } from "../../../../../shared/interface/property";

@Component({
  selector: "app-agency-agents",
  imports: [RouterModule, CommonModule],
  templateUrl: "./agency-agents.html",
  styleUrls: ["./agency-agents.scss"],
})
export class AgencyAgents {
  readonly agentsData = input<IAgencyAgent>();

  public isMobile: boolean = false;
  public mobileNumber: string;

  ngOnInit() {
    this.mobileNumber = this.agentsData()!.mobile.replace(
      this.agentsData()!.mobile.slice(-4),
      "****",
    );
  }

  showMobile(data: IAgencyAgent) {
    this.isMobile = !this.isMobile;
    if (this.isMobile) {
      this.mobileNumber = data.mobile;
    } else {
      this.mobileNumber = data.mobile.replace(data.mobile.slice(-4), "****");
    }
  }
}
