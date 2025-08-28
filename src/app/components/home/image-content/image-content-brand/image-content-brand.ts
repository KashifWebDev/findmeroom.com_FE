import { Component, inject } from "@angular/core";

import { Brand } from "../../../../shared/components/common/brand/brand";
import { IBrand } from "../../../../shared/interface/property";
import { PropertyService } from "../../../../shared/services/property.service";

@Component({
  selector: "app-image-content-brand",
  imports: [Brand],
  templateUrl: "./image-content-brand.html",
  styleUrls: ["./image-content-brand.scss"],
})
export class ImageContentBrand {
  private propertyService = inject(PropertyService);

  public title = "image_content";

  public brandData: IBrand[] = [];

  ngOnInit() {
    this.propertyService.brandData().subscribe((response) => {
      this.brandData = response.brand.filter((item) => item.type == this.title);
    });
  }
}
