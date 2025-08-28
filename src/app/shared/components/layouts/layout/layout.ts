import { Component, inject, PLATFORM_ID, REQUEST } from "@angular/core";
import { NavigationEnd, Router, RouterModule } from "@angular/router";

import * as layoutOption from "../../../data/layout";
import { ILayout } from "../../../interface/layout";
import { Footer } from "../../footer/footer";
import { Header } from "../../header/header";
import { Content } from "../../ui/content/content";
import { filter, Subscription } from "rxjs";
import { isPlatformBrowser } from "@angular/common";

@Component({
  selector: "app-layout",
  imports: [Header, Footer, RouterModule, Content],
  templateUrl: "./layout.html",
  styleUrl: "./layout.scss",
})
export class Layout {
  public data: ILayout;

  // DI
  private platformId = inject(PLATFORM_ID);
  private router = inject(Router);
  // available only on the server — optional in browser
  private req = inject(REQUEST, { optional: true }) as
    | (Request & { url?: string; originalUrl?: string })
    | null;

  private sub = new Subscription();

  ngOnInit(): void {
    // do an initial compute
    this.set();

    // recompute on each client-side navigation
    this.sub.add(
      this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(() => this.set())
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  /** SSR-safe path read */
  private currentPathname(): string {
    if (isPlatformBrowser(this.platformId)) {
      return window.location.pathname;
    }
    const raw = (this.req as any)?.originalUrl ?? (this.req as any)?.url ?? this.router.url ?? "/";
    return String(raw).split("?")[0].split("#")[0];
  }

  set() {
    var url = this.currentPathname();
    if (url.includes("/theme/slider-filter-search")) {
      this.data = layoutOption.layoutOne;
    } else if (url.includes("/theme/corporate")) {
      this.data = layoutOption.layoutTwo;
    } else if (url.includes("/theme/enterprise")) {
      this.data = layoutOption.layoutThree;
    } else if (url.includes("/theme/classic")) {
      this.data = layoutOption.layoutFour;
    } else if (url.includes("/theme/image-content")) {
      this.data = layoutOption.layoutFive;
    } else if (url.includes("/theme/modern")) {
      this.data = layoutOption.layoutSix;
    } else if (url.includes("/theme/parallax-image")) {
      this.data = layoutOption.layoutSeven;
    } else if (url.includes("/theme/search-tab")) {
      this.data = layoutOption.layoutEight;
    } else if (url.includes("/theme/typed-image")) {
      this.data = layoutOption.layoutNine;
    } else if (url.includes("/theme/morden-video")) {
      this.data = layoutOption.layoutTen;
    } else if (url.includes("/theme/map-v-search")) {
      this.data = layoutOption.layoutEleven;
    } else if (url.includes("/theme/map-h-search")) {
      this.data = layoutOption.layoutTwelve;
    } else if (
      url.includes("/page/portfolio/center-slide") ||
      url.includes("/page/portfolio/parallax") ||
      url.includes("/property/image-box") ||
      url.includes("/property/image-slider") ||
      url.includes("/property/info-tab")
    ) {
      this.data = layoutOption.lightHeaderLayout;
    } else if (
      url.includes("/property/modal-details") ||
      url.includes("/property/thumbnail-image") ||
      url.includes("/property/without-top")
    ) {
      this.data = layoutOption.shadowClsLayout;
    } else if (
      url.includes("listing/grid-view/map-header/google-map") ||
      url.includes("listing/grid-view/map-header/leaflet-map")
    ) {
      this.data = layoutOption.layoutStandHeader;
    } else if (
      url.includes("/page/other-pages/coming-soon-2") ||
      url.includes("/page/other-pages/404")
    ) {
      this.data = layoutOption.noFooter;
    } else if (
      url.includes("/page/other-pages/coming-soon-1") ||
      url.includes("/page/other-pages/coming-soon-3")
    ) {
      this.data = layoutOption.noHeaderFooter;
    } else if (url.includes("/modules/footer")) {
      layoutOption.innerPageLayout.footerStyle = "";
      this.data = layoutOption.innerPageLayout;
    } else {
      layoutOption.innerPageLayout.footerStyle = "basic";
      this.data = layoutOption.innerPageLayout;
    }
    return this.data;
  }
}
