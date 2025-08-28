import { CommonModule } from "@angular/common";
import { Component, inject, input } from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CarouselModule } from "ngx-owl-carousel-o";

import { VideoModal } from "../../../../../shared/components/common/modal/video-modal/video-modal";
import { IBlogDetails } from "../../../../../shared/interface/property";

@Component({
  selector: "app-blog-detail",
  imports: [CarouselModule, CommonModule],
  templateUrl: "./blog-detail.html",
  styleUrls: ["./blog-detail.scss"],
})
export class BlogDetail {
  private modal = inject(NgbModal);

  readonly blogDetails = input<IBlogDetails>();
  readonly type = input<string>();

  public videoUrl = "https://www.youtube.com/embed/Sz_1tkcU0Co";

  public Options = {
    loop: true,
    nav: true,
    dots: false,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
    },
  };

  openModal() {
    const modalRef = this.modal.open(VideoModal, { centered: true });
    modalRef.componentInstance.data = this.videoUrl;
  }
}
