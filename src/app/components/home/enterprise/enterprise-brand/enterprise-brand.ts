import { Component, inject } from "@angular/core";

import { Brand } from "../../../../shared/components/common/brand/brand";
import { IBrand } from "../../../../shared/interface/property";
import { PropertyService } from "../../../../shared/services/property.service";

@Component({
  selector: "app-enterprise-brand",
  imports: [Brand],
  templateUrl: "./enterprise-brand.html",
  styleUrls: ["./enterprise-brand.scss"],
})
export class EnterpriseBrand {
  private propertyService = inject(PropertyService);

  public title = "enterprise";

  public brandData: IBrand[] = [];

  ngOnInit() {
    this.propertyService.brandData().subscribe((response) => {
      this.brandData = response.brand.filter((item) => item.type == this.title);
    });
  }
}
