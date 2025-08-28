import { Component } from "@angular/core";

import { Category } from "../../../../../shared/components/common/advance-filter-box/widgets/category/category";
import { RecentlyAdded } from "../../../../../shared/components/common/advance-filter-box/widgets/recently-added/recently-added";
import { popularTags } from "../../../../../shared/data/advance-filter";

@Component({
  selector: "app-blog-page-filter",
  imports: [Category, RecentlyAdded],
  templateUrl: "./blog-page-filter.html",
  styleUrls: ["./blog-page-filter.scss"],
})
export class BlogPageFilter {
  public popularTags = popularTags;
}
