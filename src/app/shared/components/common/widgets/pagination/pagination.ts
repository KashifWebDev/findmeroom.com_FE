import { CommonModule } from "@angular/common";
import { Component, output, input } from "@angular/core";

import {
  ILatestForRent,
  IPagination,
} from "../../../../../shared/interface/property";

@Component({
  selector: "app-pagination",
  imports: [CommonModule],
  templateUrl: "./pagination.html",
  styleUrls: ["./pagination.scss"],
})
export class Pagination {
  readonly products = input<ILatestForRent[]>([]);
  readonly paginate = input<IPagination>();
  readonly total = input<number>();
  readonly currentPage = input<number>();
  readonly pageSize = input<number>();

  readonly setPage = output<number>();

  pageSet(page: number) {
    this.setPage.emit(page); // Set Page Number
  }
}
