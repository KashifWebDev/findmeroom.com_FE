import { CommonModule, ViewportScroller } from "@angular/common";
import { Component, HostListener, inject, input } from "@angular/core";

@Component({
  selector: "app-tap-to-top",
  imports: [CommonModule],
  templateUrl: "./tap-to-top.html",
  styleUrls: ["./tap-to-top.scss"],
})
export class TapToTop {
  private viewScroller = inject(ViewportScroller);

  readonly divClass = input<string>();

  public show: boolean = false;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (number > 600) {
      this.show = true;
    } else {
      this.show = false;
    }
  }

  tapToTop() {
    this.viewScroller.scrollToPosition([0, 0]);
  }
}
