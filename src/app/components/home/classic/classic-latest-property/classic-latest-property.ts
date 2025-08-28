import { Component, inject, input } from "@angular/core";

import { PropertyBox } from "../../../../shared/components/common/property-box/property-box";
import { Title } from "../../../../shared/components/ui/title/title";
import { ILatestForRent } from "../../../../shared/interface/property";
import { PropertyService } from "../../../../shared/services/property.service";

@Component({
  selector: "app-classic-latest-property",
  imports: [Title, PropertyBox],
  templateUrl: "./classic-latest-property.html",
  styleUrls: ["./classic-latest-property.scss"],
})
export class ClassicLatestProperty {
  propertyService = inject(PropertyService);

  readonly latestPropertyData = input<ILatestForRent[]>();

  public desc =
    "Elegant retreat in Coral Gables setting. This home provides entertaining spaces with kitchen opening";
  public title = "classic";
}
