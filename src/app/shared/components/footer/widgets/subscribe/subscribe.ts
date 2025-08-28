import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-subscribe",
  imports: [CommonModule],
  templateUrl: "./subscribe.html",
  styleUrls: ["./subscribe.scss"],
})
export class Subscribe {
  public isSubscribe: boolean = false;

  openSubscribe() {
    this.isSubscribe = !this.isSubscribe;
  }
}
