import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { featuresFooterData } from "../../../../data/footer";

@Component({
  selector: "app-features",
  imports: [RouterModule, CommonModule],
  templateUrl: "./features.html",
  styleUrls: ["./features.scss"],
})
export class Features {
  public featuresFooterData = featuresFooterData;
  public isFeatureData: boolean = false;

  openFeature() {
    this.isFeatureData = !this.isFeatureData;
  }
}
