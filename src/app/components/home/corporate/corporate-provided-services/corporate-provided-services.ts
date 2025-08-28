import { CommonModule } from "@angular/common";
import { Component, inject, input } from "@angular/core";

import { ProvidedServices } from "../../../../shared/components/common/provided-services/provided-services";
import { Title } from "../../../../shared/components/ui/title/title";
import { IProvidedServices } from "../../../../shared/interface/property";
import { PropertyService } from "../../../../shared/services/property.service";

@Component({
  selector: "app-corporate-provided-services",
  imports: [Title, ProvidedServices, CommonModule],
  templateUrl: "./corporate-provided-services.html",
  styleUrls: ["./corporate-provided-services.scss"],
})
export class CorporateProvidedServices {
  private propertyService = inject(PropertyService);

  readonly tagClass = input<string>();
  readonly svgClass = input<boolean>();

  public title = "corporate";
  public desc =
    "Elegant retreat in Coral Gables setting. This home provides entertaining spaces with kitchen opening";

  public providedServices: IProvidedServices[] = [];

  ngOnInit() {
    this.propertyService.providesServices().subscribe((response) => {
      this.providedServices = response.services.filter(
        (item) => item.type == this.title,
      );
    });
  }
}
