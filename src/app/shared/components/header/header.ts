import { Component, input } from "@angular/core";

import { HeaderFour } from "./header-four/header-four";
import { HeaderOne } from "./header-one/header-one";
import { HeaderThree } from "./header-three/header-three";
import { HeaderTwo } from "./header-two/header-two";
import { ILayout } from "../../interface/layout";

@Component({
  selector: "app-header",
  imports: [HeaderOne, HeaderTwo, HeaderThree, HeaderFour],
  templateUrl: "./header.html",
  styleUrls: ["./header.scss"],
})
export class Header {
  readonly type = input<string>();
  readonly headerLogo = input<string>();
  readonly darkHeaderLogo = input<string>();
  readonly themeLogo = input<string>();
  readonly headerClass = input<string>();
  readonly headerFix = input<boolean>();
  readonly darkFooterLogo = input<string>();
  readonly darkThemeHeaderLogo = input<string>();
  readonly data = input<ILayout>();
}
