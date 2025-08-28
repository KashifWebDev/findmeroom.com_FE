import { CommonModule } from "@angular/common";
import { Component, inject, input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { ILatestForSale } from "../../../../../shared/interface/property";
import { PropertyService } from "../../../../../shared/services/property.service";
import { CurrencySymbolPipe } from "../../../../pipe/currency-symbol.pipe";

@Component({
  selector: "app-property-box-one",
  imports: [CommonModule, CurrencySymbolPipe],
  templateUrl: "./property-box-one.html",
  styleUrls: ["./property-box-one.scss"],
})
export class PropertyBoxOne {
  propertyService = inject(PropertyService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  readonly propertyData = input<ILatestForSale>();
  readonly tagClass = input<string>();

  getDetails(id: string) {
    void this.router.navigate(["/property/image-box"], {
      relativeTo: this.route,
      queryParams: { id: id },
      queryParamsHandling: "merge", // preserve the existing query params in the route
      skipLocationChange: false, // do trigger navigation
    });
  }
}
