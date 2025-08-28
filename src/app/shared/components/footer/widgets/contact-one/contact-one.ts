import { CommonModule } from "@angular/common";
import { Component, inject, input } from "@angular/core";
import { RouterModule } from "@angular/router";

import { LayoutService } from "../../../../../shared/services/layout.service";

@Component({
  selector: "app-contact-one",
  imports: [CommonModule, RouterModule],
  templateUrl: "./contact-one.html",
  styleUrls: ["./contact-one.scss"],
})
export class ContactOne {
  layout = inject(LayoutService);

  readonly footerLogo = input<string>();
  readonly footerDark = input<boolean | undefined>(false);
  readonly darkFooterLogo = input<string>();

  public isContactOpen: boolean = false;

  openContact() {
    this.isContactOpen = !this.isContactOpen;
  }
}
