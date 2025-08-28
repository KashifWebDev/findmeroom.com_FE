import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";

@Component({
  selector: "app-title",
  imports: [CommonModule],
  templateUrl: "./title.html",
  styleUrls: ["./title.scss"],
})
export class Title {
  readonly titleClass = input<string>("");
  readonly tagClass = input<string>("");
  readonly tag = input<string>("");
  readonly heading = input<string>("");
  readonly desc = input<string>("");
  readonly textWhite = input<boolean>(false);
  readonly svgIcon = input<boolean>(false);
  readonly type = input<string>("");
  readonly svgClass = input<boolean>(false);
  readonly descClass = input<string>();
}
