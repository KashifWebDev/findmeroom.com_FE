import { Component, inject, input } from "@angular/core";

import { ProvidedServices } from "../../../../shared/components/common/provided-services/provided-services";
import { Title } from "../../../../shared/components/ui/title/title";
import { IProvidedServices } from "../../../../shared/interface/property";
import { PropertyService } from "../../../../shared/services/property.service";

@Component({
  selector: "app-enterprise-property-service",
  imports: [Title, ProvidedServices],
  templateUrl: "./enterprise-property-service.html",
  styleUrls: ["./enterprise-property-service.scss"],
})
export class EnterprisePropertyService {
  private propertyService = inject(PropertyService);

  readonly title = input<string>();

  public desc =
    "Discover New York’s best things to do, restaurants, theatre, nightlife and more";

  public providedServices: IProvidedServices[] = [];

  ngOnInit() {
    this.propertyService.providesServices().subscribe((response) => {
      this.providedServices = response.services.filter((item) =>
        item.type.includes(this.title()!),
      );
    });
  }
}
