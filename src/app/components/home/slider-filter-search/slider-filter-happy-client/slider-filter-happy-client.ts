import { Component, inject, input } from "@angular/core";

import { HappyClients } from "../../../../shared/components/common/happy-clients/happy-clients";
import { Title } from "../../../../shared/components/ui/title/title";
import { IHappyClients } from "../../../../shared/interface/property";
import { PropertyService } from "../../../../shared/services/property.service";

@Component({
  selector: "app-slider-filter-happy-client",
  imports: [Title, HappyClients],
  templateUrl: "./slider-filter-happy-client.html",
  styleUrls: ["./slider-filter-happy-client.scss"],
})
export class SliderFilterHappyClient {
  private propertyService = inject(PropertyService);

  readonly tagClass = input<string>("");
  readonly title = input<string>();

  public happyClientsData: IHappyClients[] = [];

  ngOnInit() {
    this.propertyService.happyClientsData().subscribe((response) => {
      this.happyClientsData = response.clients.filter((item) =>
        item.type.includes(this.title()!),
      );
    });
  }
}
