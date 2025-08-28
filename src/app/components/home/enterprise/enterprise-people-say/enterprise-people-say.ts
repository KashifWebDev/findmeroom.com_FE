import { Component, inject } from "@angular/core";

import { PeopleSay } from "../../../../shared/components/common/people-say/people-say";
import { Title } from "../../../../shared/components/ui/title/title";
import { IPeopleSay } from "../../../../shared/interface/property";
import { PropertyService } from "../../../../shared/services/property.service";

@Component({
  selector: "app-enterprise-people-say",
  imports: [Title, PeopleSay],
  templateUrl: "./enterprise-people-say.html",
  styleUrls: ["./enterprise-people-say.scss"],
})
export class EnterprisePeopleSay {
  private propertyService = inject(PropertyService);

  public desc = "Cum doctus civibus efficiantur in imperdiet deterruisset.";
  public title: string = "enterprise";

  public peopleSayData: IPeopleSay[];
  ngOnInit() {
    this.propertyService.peopleSayData().subscribe((response) => {
      this.peopleSayData = response.peopleSay.filter(
        (item) => item.type == this.title,
      );
    });
  }
}
