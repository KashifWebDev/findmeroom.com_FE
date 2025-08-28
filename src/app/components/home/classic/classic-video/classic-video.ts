import { Component, inject } from "@angular/core";
import { RouterModule } from "@angular/router";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { VideoModal } from "../../../../shared/components/common/modal/video-modal/video-modal";

@Component({
  selector: "app-classic-video",
  imports: [RouterModule],
  templateUrl: "./classic-video.html",
  styleUrls: ["./classic-video.scss"],
})
export class ClassicVideo {
  private modal = inject(NgbModal);

  public videoUrl = "https://www.youtube.com/embed/Sz_1tkcU0Co";

  openModal() {
    const modalRef = this.modal.open(VideoModal, { centered: true });
    modalRef.componentInstance.data = this.videoUrl;
  }
}
