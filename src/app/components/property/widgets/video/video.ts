import { Component, inject, input } from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { VideoModal } from "../../../../shared/components/common/modal/video-modal/video-modal";
import { IImg } from "../../../../shared/interface/property";

@Component({
  selector: "app-video",
  imports: [],
  templateUrl: "./video.html",
  styleUrls: ["./video.scss"],
})
export class Video {
  private modal = inject(NgbModal);

  readonly videoData = input<IImg[]>();

  openModal(videoUrl: string) {
    const modalRef = this.modal.open(VideoModal, { centered: true });
    modalRef.componentInstance.data = videoUrl;
  }
}
