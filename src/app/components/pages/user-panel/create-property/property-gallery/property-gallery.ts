import { Component } from "@angular/core";

import { DropzoneConfigInterface, DropzoneModule } from "ngx-dropzone-wrapper";

@Component({
  selector: "app-property-gallery",
  imports: [DropzoneModule],
  templateUrl: "./property-gallery.html",
  styleUrls: ["./property-gallery.scss"],
})
export class PropertyGallery {
  public text =
    '<i class="fas fa-cloud-upload-alt"></i><h6>Drop files here or click to upload.</h6><span class="note needsclick">(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</span>';
  public imageConfig: DropzoneConfigInterface = {
    clickable: true,
    url: "https://httpbin.org/post",
    acceptedFiles: "image/*",
    addRemoveLinks: true,
    parallelUploads: 1,
  };

  onUploadError(_args: unknown): void {}

  onUploadSuccess(_args: unknown): void {}
}
