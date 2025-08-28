import { Component, inject } from "@angular/core";

import { HappyClients } from "../../../../shared/components/common/happy-clients/happy-clients";
import { Title } from "../../../../shared/components/ui/title/title";
import { IHappyClients } from "../../../../shared/interface/property";
import { PropertyService } from "../../../../shared/services/property.service";

@Component({
  selector: "app-classic-happy-client",
  imports: [Title, HappyClients],
  templateUrl: "./classic-happy-client.html",
  styleUrls: ["./classic-happy-client.scss"],
})
export class ClassicHappyClient {
  private propertyService = inject(PropertyService);

  public desc =
    "Elegant retreat in Coral Gables setting. This home provides entertaining spaces with kitchen opening";
  public title = "classic";
  public happyClientsData: IHappyClients[] = [];

  ngOnInit() {
    this.propertyService.happyClientsData().subscribe((response) => {
      this.happyClientsData = response.clients.filter(
        (item) => item.type == this.title,
      );
    });
  }
}
