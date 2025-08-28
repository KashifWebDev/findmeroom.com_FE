import { Component, input } from "@angular/core";

import { FooterOne } from "./footer-one/footer-one";
import { FooterThree } from "./footer-three/footer-three";
import { FooterTwo } from "./footer-two/footer-two";
import { ILayout } from "../../interface/layout";

@Component({
  selector: "app-footer",
  imports: [FooterOne, FooterTwo, FooterThree],
  templateUrl: "./footer.html",
  styleUrls: ["./footer.scss"],
})
export class Footer {
  readonly data = input<ILayout>();
  readonly type = input<string>();
  readonly themeLogo = input<string>();
  readonly footerClass = input<string>();
  readonly heartIcon = input<boolean>();
  readonly footerDark = input<boolean>();
  readonly footerLogo = input<string>();
  readonly darkFooterLogo = input<string>();
  readonly subFooterClass = input<string>();
}
