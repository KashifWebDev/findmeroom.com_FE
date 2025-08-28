import { Component, inject, input, PLATFORM_ID } from "@angular/core";

import * as feather from "feather-icons";
import { useIsBrowser } from "../../../utils/platform";
import { isPlatformBrowser } from "@angular/common";

@Component({
  selector: "app-feather-icons",
  imports: [],
  templateUrl: "./feather-icons.html",
  styleUrls: ["./feather-icons.scss"],
})
export class FeatherIcons {
  isBrowser = useIsBrowser();
  public readonly icon = input<string>();
  private platformId = inject(PLATFORM_ID);

  private t: any;

  async ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    const feather = await import('feather-icons');   // dynamic import avoids SSR eval
    this.t = setTimeout(() => feather.replace(), 0); // your original timing, but browser only
  }

  ngOnDestroy() {
    if (this.t) clearTimeout(this.t);
  }

  ngOnInit() {
    setTimeout(() => {
      feather.replace();
    });
  }
}
