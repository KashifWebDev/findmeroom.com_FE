import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-breadcrumb",
  imports: [CommonModule, RouterModule],
  templateUrl: "./breadcrumb.html",
  styleUrls: ["./breadcrumb.scss"],
})
export class Breadcrumb {
  readonly bgImage = input<string>();
  readonly title = input<string>();
  readonly parent = input<string>();
  readonly child = input<string>();
  readonly type = input<string>();
}
