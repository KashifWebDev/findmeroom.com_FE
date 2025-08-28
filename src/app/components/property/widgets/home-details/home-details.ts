import { Component, inject, input } from "@angular/core";

import { FeatherIcons } from "../../../../shared/components/ui/feather-icons/feather-icons";
import { ILatestForRent } from "../../../../shared/interface/property";
import { CurrencySymbolPipe } from "../../../../shared/pipe/currency-symbol.pipe";
import { PropertyService } from "../../../../shared/services/property.service";

@Component({
  selector: "app-home-details",
  imports: [FeatherIcons, CurrencySymbolPipe],
  templateUrl: "./home-details.html",
  styleUrls: ["./home-details.scss"],
})
export class HomeDetails {
  propertyService = inject(PropertyService);

  readonly propertyDetails = input<ILatestForRent>();

  print() {
    window.print();
  }
}
