import { Component, inject } from "@angular/core";

import { ProvidedServices } from "../../../../shared/components/common/provided-services/provided-services";
import { Title } from "../../../../shared/components/ui/title/title";
import { IProvidedServices } from "../../../../shared/interface/property";
import { PropertyService } from "../../../../shared/services/property.service";

@Component({
  selector: "app-classic-property-service",
  imports: [Title, ProvidedServices],
  templateUrl: "./classic-property-service.html",
  styleUrls: ["./classic-property-service.scss"],
})
export class ClassicPropertyService {
  private propertyService = inject(PropertyService);

  public desc =
    "Residences can be classified into different type of housing tenure can used for same physical type.";
  public title = "classic";

  public providedServices: IProvidedServices[] = [];

  ngOnInit() {
    this.propertyService.providesServices().subscribe((response) => {
      this.providedServices = response.services.filter(
        (item) => item.type == this.title,
      );
    });
  }
}
