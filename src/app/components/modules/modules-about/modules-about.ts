import { Component, inject } from "@angular/core";

import { Agents } from "../../../shared/components/common/agents/agents";
import { Breadcrumb } from "../../../shared/components/ui/breadcrumb/breadcrumb";
import { Title } from "../../../shared/components/ui/title/title";
import { IAgents } from "../../../shared/interface/property";
import { PropertyService } from "../../../shared/services/property.service";

@Component({
  selector: "app-modules-about",
  templateUrl: "./modules-about.html",
  styleUrls: ["./modules-about.scss"],
  imports: [Breadcrumb, Title, Agents],
})
export class ModulesAbout {
  private propertyService = inject(PropertyService);

  public themeLogo = "assets/images/logo/2.png";
  public footerLogo = "assets/images/logo/footer-logo.png";
  public bgImage = "assets/images/inner-background.jpg";
  public title = "About";
  public parent = "Modules";
  public child = "About";

  public desc1 =
    "Elegant retreat in Coral Gables setting. This home provides entertaining spaces with kitchen opening";
  public desc2 =
    "Residences can be classified into different type of housing tenure can used for same physical type.";

  public agentsTitle1 = "image_content";
  public agentsTitle2 = "corporate";
  public agentsTitle3 = "classic";

  public agentsData1: IAgents[] = [];
  public agentsData2: IAgents[] = [];
  public agentsData3: IAgents[] = [];

  public theme_default3 = "#ff5c41";
  public theme_default4 = "#ff8c41";

  ngOnInit() {
    this.propertyService.agentsData().subscribe((response) => {
      this.agentsData1 = response.agents.filter((item) =>
        item.type.includes(this.agentsTitle1),
      );
      this.agentsData2 = response.agents.filter(
        (item) => item.type == this.agentsTitle2,
      );
      this.agentsData3 = response.agents.filter(
        (item) => item.type == this.agentsTitle3,
      );
    });
  }
}
