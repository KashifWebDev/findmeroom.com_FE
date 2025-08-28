import { Component, input } from "@angular/core";

import { FeatherIcons } from "../../../ui/feather-icons/feather-icons";

@Component({
  selector: "app-copy-right-one",
  imports: [FeatherIcons],
  templateUrl: "./copy-right-one.html",
  styleUrls: ["./copy-right-one.scss"],
})
export class CopyRightOne {
  readonly heartIcon = input<boolean | undefined>(false);
  public year = new Date().getFullYear();
}
