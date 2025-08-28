import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";

import { FeatherIcons } from "../../../../shared/components/ui/feather-icons/feather-icons";
import { IDetails } from "../../../../shared/data/contact-us";

@Component({
  selector: "app-contact-details",
  imports: [CommonModule, FeatherIcons],
  templateUrl: "./contact-details.html",
  styleUrls: ["./contact-details.scss"],
})
export class ContactDetails {
  readonly contactDetailsData = input<IDetails>();
  readonly divClass = input<string>();
}
