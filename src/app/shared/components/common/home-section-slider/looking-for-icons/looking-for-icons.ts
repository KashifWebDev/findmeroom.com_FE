import { Component, input } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AngularSvgIconModule } from "angular-svg-icon";

import { lookingForData } from "../../../../data/slider-filter-search";

@Component({
  selector: "app-looking-for-icons",
  imports: [AngularSvgIconModule, RouterModule],
  templateUrl: "./looking-for-icons.html",
  styleUrls: ["./looking-for-icons.scss"],
})
export class LookingForIcons {
  readonly text = input<boolean>(false);

  public lookingForData = lookingForData;
}
