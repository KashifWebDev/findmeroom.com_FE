import { Component, inject, input } from "@angular/core";

import { HappyClients } from "../../../../shared/components/common/happy-clients/happy-clients";
import { Title } from "../../../../shared/components/ui/title/title";
import { IHappyClients } from "../../../../shared/interface/property";
import { PropertyService } from "../../../../shared/services/property.service";

@Component({
  selector: "app-corporate-clients",
  imports: [Title, HappyClients],
  templateUrl: "./corporate-clients.html",
  styleUrls: ["./corporate-clients.scss"],
})
export class CorporateClients {
  private propertyService = inject(PropertyService);

  readonly tagClass = input<string>();
  readonly svgClass = input<boolean>();

  public desc =
    "Residences can be classified into different type of housing tenure can used for same physical type";
  public title = "corporate";

  public happyClientsData: IHappyClients[] = [];

  ngOnInit() {
    this.propertyService.happyClientsData().subscribe((response) => {
      this.happyClientsData = response.clients.filter(
        (item) => item.type == this.title,
      );
    });
  }
}
