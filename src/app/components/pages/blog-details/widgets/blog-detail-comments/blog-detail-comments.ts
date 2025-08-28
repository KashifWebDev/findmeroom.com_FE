import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";

import { IComments } from "../../../../../shared/interface/property";

@Component({
  selector: "app-blog-detail-comments",
  imports: [CommonModule],
  templateUrl: "./blog-detail-comments.html",
  styleUrls: ["./blog-detail-comments.scss"],
})
export class BlogDetailComments {
  readonly commentsData = input<IComments>();
}
