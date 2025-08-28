import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-search",
  imports: [CommonModule],
  templateUrl: "./search.html",
  styleUrls: ["./search.scss"],
})
export class Search {
  public searchOpen: boolean = false;

  openSearch() {
    this.searchOpen = !this.searchOpen;
  }
}
