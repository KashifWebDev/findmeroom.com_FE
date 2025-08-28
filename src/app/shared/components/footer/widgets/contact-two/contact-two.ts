import { Component, input } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-contact-two",
  imports: [RouterModule],
  templateUrl: "./contact-two.html",
  styleUrls: ["./contact-two.scss"],
})
export class ContactTwo {
  readonly footerLogo = input<string>();
}
