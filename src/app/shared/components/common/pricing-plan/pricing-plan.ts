import { Component, input } from "@angular/core";

import { PricingPlanOne } from "./pricing-plan-one/pricing-plan-one";
import { ICurrency, IPricingPlan } from "../../../../shared/interface/property";

@Component({
  selector: "app-pricing-plan",
  imports: [PricingPlanOne],
  templateUrl: "./pricing-plan.html",
  styleUrls: ["./pricing-plan.scss"],
})
export class PricingPlan {
  readonly pricingPlan = input<IPricingPlan[]>([]);
  readonly type = input<string>("");
  readonly tagClass = input<string>();
  readonly currency = input<ICurrency>();
}
