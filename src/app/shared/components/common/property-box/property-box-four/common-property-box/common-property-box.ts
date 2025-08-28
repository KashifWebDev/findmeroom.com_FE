import { Component, inject, input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { ILatestForRent } from "../../../../../../shared/interface/property";
import { PropertyService } from "../../../../../../shared/services/property.service";
import { CurrencySymbolPipe } from "../../../../../pipe/currency-symbol.pipe";

@Component({
  selector: "app-common-property-box",
  imports: [CurrencySymbolPipe],
  templateUrl: "./common-property-box.html",
  styleUrls: ["./common-property-box.scss"],
})
export class CommonPropertyBox {
  propertyService = inject(PropertyService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  readonly propertyData = input<ILatestForRent>();

  getDetails(id: number) {
    void this.router.navigate(["/property/image-box"], {
      relativeTo: this.route,
      queryParams: { id: id },
      queryParamsHandling: "merge", // preserve the existing query params in the route
      skipLocationChange: false, // do trigger navigation
    });
  }
}
