import { Component, input } from "@angular/core";

@Component({
  selector: "app-propety-floor-plan",
  imports: [],
  templateUrl: "./propety-floor-plan.html",
  styleUrls: ["./propety-floor-plan.scss"],
})
export class PropetyFloorPlan {
  readonly floorPlanData = input();
}
