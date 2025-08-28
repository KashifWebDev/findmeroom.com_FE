import { Component } from "@angular/core";

@Component({
  selector: "app-property-confirmation",
  imports: [],
  templateUrl: "./property-confirmation.html",
  styleUrls: ["./property-confirmation.scss"],
})
export class PropertyConfirmation {
  submit() {
    window.location.reload();
  }
}
