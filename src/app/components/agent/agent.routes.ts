import { Routes } from "@angular/router";

import { AgentGrid } from "./agent-grid/agent-grid";
import { AgentList } from "./agent-list/agent-list";
import { AgentProfile } from "./agent-profile/agent-profile";
import { SubmitProperty } from "./submit-property/submit-property";

export default [
  {
    path: "agent-profile",
    component: AgentProfile,
  },
  {
    path: "agent-grid",
    component: AgentGrid,
  },
  {
    path: "agent-list",
    component: AgentList,
  },
  {
    path: "submit-property",
    component: SubmitProperty,
  },
] as Routes;
