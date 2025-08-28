import { Component, input } from "@angular/core";

@Component({
  selector: "app-propety-location",
  imports: [],
  templateUrl: "./propety-location.html",
  styleUrls: ["./propety-location.scss"],
})
export class PropetyLocation {
  readonly location = input<unknown>();
}
