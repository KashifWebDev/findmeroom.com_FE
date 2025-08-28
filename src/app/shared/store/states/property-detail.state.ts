import { Injectable, inject } from "@angular/core";

import { Action, Selector, State, StateContext } from "@ngxs/store";
import { tap } from "rxjs";

import { ILatestForRent } from "../../interface/property";
import { PropertyService } from "../../services/property.service";
import { GetPropertyDetails } from "../actions/property-detail.action";

export class PropertyDetailsModel {
  data: {
    property: ILatestForRent[];
  };
}

@State<PropertyDetailsModel>({
  name: "property",
  defaults: {
    data: {
      property: [],
    },
  },
})
@Injectable()
export class PropertyState {
  private propertyService = inject(PropertyService);

  @Selector()
  static property(state: PropertyDetailsModel) {
    return state.data.property;
  }

  @Action(GetPropertyDetails)
  getProperty(
    ctx: StateContext<PropertyDetailsModel>,
    action: GetPropertyDetails,
  ) {
    return this.propertyService.getPropertyDetail(action.id).pipe(
      tap((res) => {
        ctx.setState({
          data: {
            property: res,
          },
        });
      }),
    );
  }
}
