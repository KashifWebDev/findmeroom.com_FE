import { Component, input } from "@angular/core";

import { LoaderOne } from "./loader-one/loader-one";
import { LoaderThree } from "./loader-three/loader-three";
import { LoaderTwo } from "./loader-two/loader-two";

@Component({
  selector: "app-loader",
  imports: [LoaderOne, LoaderTwo, LoaderThree],
  templateUrl: "./loader.html",
  styleUrls: ["./loader.scss"],
})
export class Loader {
  readonly type = input<string>();
}
