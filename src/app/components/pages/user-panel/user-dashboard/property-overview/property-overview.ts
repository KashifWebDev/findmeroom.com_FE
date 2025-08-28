import { Component } from "@angular/core";

import { FeatherIcons } from "../../../../../shared/components/ui/feather-icons/feather-icons";
import { propertyOverviewData } from "../../../../../shared/data/user-panel";

@Component({
  selector: "app-property-overview",
  imports: [FeatherIcons],
  templateUrl: "./property-overview.html",
  styleUrls: ["./property-overview.scss"],
})
export class PropertyOverview {
  public propertyOverviewData = propertyOverviewData;
}
