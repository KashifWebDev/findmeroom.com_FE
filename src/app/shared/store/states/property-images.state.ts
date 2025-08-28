import { Injectable, inject } from "@angular/core";

import { Action, Selector, State, StateContext } from "@ngxs/store";
import { tap } from "rxjs";

import { ILatestForRent, ILatestForSale } from "../../interface/property";
import { PropertyService } from "../../services/property.service";
import { GetImages } from "../actions/property-images.action";

export class ImagesModel {
  data: {
    data: ILatestForSale[] | ILatestForRent[];
  };
}

@State<ImagesModel>({
  name: "images",
  defaults: {
    data: {
      data: [],
    },
  },
})
@Injectable()
export class ImageState {
  private propertyService = inject(PropertyService);

  @Selector()
  static images(state: ImagesModel) {
    return state.data.data;
  }

  @Action(GetImages)
  getImage(ctx: StateContext<ImagesModel>, action: GetImages) {
    return this.propertyService.getImage(action.id).pipe(
      tap((res) => {
        ctx.setState({
          data: {
            data: res,
          },
        });
      }),
    );
  }
}
