import { CommonModule } from "@angular/common";
import { Component, inject, input } from "@angular/core";

import { NgbRatingConfig, NgbRatingModule } from "@ng-bootstrap/ng-bootstrap";

import { IReview } from "../../../../shared/interface/property";

@Component({
  selector: "app-review",
  imports: [NgbRatingModule, CommonModule],
  templateUrl: "./review.html",
  styleUrls: ["./review.scss"],
})
export class Review {
  config = inject(NgbRatingConfig);

  readonly reviewData = input<IReview[]>();

  constructor() {
    const config = this.config;

    config.max = 5;
    config.readonly = true;
  }
}
