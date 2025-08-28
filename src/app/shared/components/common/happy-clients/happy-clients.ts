import { Component, input } from "@angular/core";

import { HappyClientOne } from "./happy-client-one/happy-client-one";
import { HappyClientThree } from "./happy-client-three/happy-client-three";
import { HappyClientTwo } from "./happy-client-two/happy-client-two";
import { IHappyClients } from "../../../../shared/interface/property";

@Component({
  selector: "app-happy-clients",
  imports: [HappyClientOne, HappyClientTwo, HappyClientThree],
  templateUrl: "./happy-clients.html",
  styleUrls: ["./happy-clients.scss"],
})
export class HappyClients {
  readonly happyClientsData = input<IHappyClients[]>([]);
  readonly type = input<string>("");
  readonly tagClass = input<string>("");
}
