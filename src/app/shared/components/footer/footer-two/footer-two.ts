import { Component, input } from "@angular/core";

import { ContactTwo } from "../widgets/contact-two/contact-two";
import { CopyRightTwo } from "../widgets/copy-right-two/copy-right-two";
import { Features } from "../widgets/features/features";
import { FooterMenu } from "../widgets/footer-menu/footer-menu";
import { LatestBlogHorizontal } from "../widgets/latest-blog-horizontal/latest-blog-horizontal";
import { Social } from "../widgets/social/social";
import { Subscribe } from "../widgets/subscribe/subscribe";
import { UsefulLinks } from "../widgets/useful-links/useful-links";

@Component({
  selector: "app-footer-two",
  imports: [
    ContactTwo,
    UsefulLinks,
    Features,
    Social,
    Subscribe,
    LatestBlogHorizontal,
    CopyRightTwo,
    FooterMenu,
  ],
  templateUrl: "./footer-two.html",
  styleUrls: ["./footer-two.scss"],
})
export class FooterTwo {
  readonly footerLogo = input<string>();
}
