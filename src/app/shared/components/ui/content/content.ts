import { Component, inject, input } from "@angular/core";

import { ILayout } from "../../../interface/layout";
import { LayoutService } from "../../../services/layout.service";
import { Loader } from "../../common/loader/loader";
import { Customizer } from "../customizer/customizer";
import { TapToTop } from "../tap-to-top/tap-to-top";

@Component({
  selector: "app-content",
  imports: [Loader, TapToTop, Customizer],
  providers: [LayoutService],
  templateUrl: "./content.html",
  styleUrls: ["./content.scss"],
})
export class Content {
  layoutService = inject(LayoutService);

  readonly data = input<ILayout>();
  readonly loaderType = input<string>();
  readonly divClass = input<string>();
  readonly themeColor1 = input<string>();
  readonly themeColor2 = input<string>();
  readonly localStorageColor1 = input<string>();
  readonly localStorageColor2 = input<string>();
  receiveChildData1(color: string) {
    const data = this.data();
    if (data?.localStorageColor1) {
      document.documentElement.style.setProperty(
        data.localStorageColor1,
        color,
      );
      document.documentElement.style.setProperty("--theme-default", color);
      localStorage.setItem(data.localStorageColor1, color);
    }
  }

  receiveChildData2(color: string) {
    const data = this.data();
    if (data?.localStorageColor2) {
      document.documentElement.style.setProperty(
        data.localStorageColor2,
        color,
      );
      localStorage.setItem(data.localStorageColor2, color);
    }
  }
}
