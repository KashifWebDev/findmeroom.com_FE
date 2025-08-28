import { Component, inject } from "@angular/core";

import { Brand } from "../../../../shared/components/common/brand/brand";
import { IBrand } from "../../../../shared/interface/property";
import { PropertyService } from "../../../../shared/services/property.service";

@Component({
  selector: "app-classic-brand",
  imports: [Brand],
  templateUrl: "./classic-brand.html",
  styleUrls: ["./classic-brand.scss"],
})
export class ClassicBrand {
  private propertyService = inject(PropertyService);

  public title = "classic";
  public brandData: IBrand[] = [];

  ngOnInit() {
    this.propertyService.brandData().subscribe((response) => {
      this.brandData = response.brand.filter((item) => item.type == this.title);
    });
  }
}
