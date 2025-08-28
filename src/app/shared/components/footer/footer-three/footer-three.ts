import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";

import { About } from "../widgets/about/about";
import { Buy } from "../widgets/buy/buy";
import { ContactOne } from "../widgets/contact-one/contact-one";
import { CopyRightOne } from "../widgets/copy-right-one/copy-right-one";
import { RelandEstate } from "../widgets/reland-estate/reland-estate";
import { Sell } from "../widgets/sell/sell";
import { SocialMedia } from "../widgets/social-media/social-media";

@Component({
  selector: "app-footer-three",
  imports: [
    CommonModule,
    ContactOne,
    About,
    Buy,
    Sell,
    RelandEstate,
    SocialMedia,
    CopyRightOne,
  ],
  templateUrl: "./footer-three.html",
  styleUrls: ["./footer-three.scss"],
})
export class FooterThree {
  readonly footerDark = input<boolean | undefined>(false);
  readonly footerLogo = input<string>();
  readonly darkFooterLogo = input<string>();
}
