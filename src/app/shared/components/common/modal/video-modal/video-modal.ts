import { Component, inject, input } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-video-modal",
  imports: [],
  templateUrl: "./video-modal.html",
  styleUrls: ["./video-modal.scss"],
})
export class VideoModal {
  private modal = inject(NgbModal);
  sanitizer = inject(DomSanitizer);

  readonly data = input<string>("");

  safe(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  close() {
    this.modal.dismissAll();
  }
}
