import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";

import { IFooterBlogData } from "../../../../shared/interface/footer";
import { About } from "../widgets/about/about";
import { ContactOne } from "../widgets/contact-one/contact-one";
import { CopyRightOne } from "../widgets/copy-right-one/copy-right-one";
import { LatestBlogVertical } from "../widgets/latest-blog-vertical/latest-blog-vertical";
import { Map } from "../widgets/map/map";
import { SocialMedia } from "../widgets/social-media/social-media";
import { Tag } from "../widgets/tag/tag";

@Component({
  selector: "app-footer-one",
  imports: [
    ContactOne,
    About,
    Map,
    CommonModule,
    Tag,
    LatestBlogVertical,
    SocialMedia,
    CopyRightOne,
  ],
  templateUrl: "./footer-one.html",
  styleUrls: ["./footer-one.scss"],
})
export class FooterOne {
  readonly blogData = input<IFooterBlogData[]>([]);
  readonly footerLogo = input<string>();
  readonly footerClass = input<string | undefined>("");
  readonly heartIcon = input<boolean | undefined>(true);
  readonly darkFooterLogo = input<string>();
  readonly subFooterClass = input<string>();
}
