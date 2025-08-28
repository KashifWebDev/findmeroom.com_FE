import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";

import { FeatherIcons } from "../../../../shared/components/ui/feather-icons/feather-icons";

@Component({
  selector: "app-contact-us-form",
  imports: [CommonModule, FeatherIcons],
  templateUrl: "./contact-us-form.html",
  styleUrls: ["./contact-us-form.scss"],
})
export class ContactUsForm {
  readonly captcha = input<boolean>(false);
  readonly rowClass = input<string>();
}
