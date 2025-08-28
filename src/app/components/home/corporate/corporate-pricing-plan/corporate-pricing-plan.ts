import { CommonModule } from "@angular/common";
import { Component, inject, input } from "@angular/core";

import { PricingPlan } from "../../../../shared/components/common/pricing-plan/pricing-plan";
import { Title } from "../../../../shared/components/ui/title/title";
import { IPricingPlan } from "../../../../shared/interface/property";
import { PropertyService } from "../../../../shared/services/property.service";

@Component({
  selector: "app-corporate-pricing-plan",
  imports: [CommonModule, Title, PricingPlan],
  templateUrl: "./corporate-pricing-plan.html",
  styleUrls: ["./corporate-pricing-plan.scss"],
})
export class CorporatePricingPlan {
  propertyService = inject(PropertyService);

  readonly tagClass = input<string>();
  readonly svgClass = input<boolean>();

  public title = "corporate";
  public desc =
    "Elegant retreat in Coral Gables setting. This home provides entertaining spaces with kitchen opening";

  public pricingPlan: IPricingPlan[] = [];

  ngOnInit() {
    this.propertyService.pricingPlanData().subscribe((response) => {
      this.pricingPlan = response.pricingPlan.filter(
        (item) => item.type == this.title,
      );
    });
  }
}
