import { Injectable, inject } from "@angular/core";

import { Action, Selector, State, StateContext } from "@ngxs/store";
import { ToastrService } from "ngx-toastr";

import { ILatestForRent } from "../../interface/property";
import {
  AddCompareItem,
  GetCompareData,
  RemoveCompareItem,
} from "../actions/compare.action";

export class CompareModel {
  data: {
    compare: ILatestForRent[];
  };
}

@State<CompareModel>({
  name: "compare",
  defaults: {
    data: {
      compare: [],
    },
  },
})
@Injectable()
export class CompareState {
  private toastr = inject(ToastrService);

  @Selector()
  static GetCompareData(state: CompareModel) {
    return state.data.compare;
  }

  // Get Compare Data
  @Action(GetCompareData)
  getwishlist(ctx: StateContext<CompareModel>) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
    });
  }

  // Add To Compare
  @Action(AddCompareItem)
  addCompareData(ctx: StateContext<CompareModel>, action: AddCompareItem) {
    const state = ctx.getState();

    const compareData = state.data.compare.find(
      (item: { id: number }) => item.id === action.payload.id,
    );

    if (!compareData) {
      ctx.patchState({
        data: {
          compare: [...state.data.compare, action.payload],
        },
      });
      this.toastr.success("Property has been added in Compare.");
    } else {
      this.toastr.error("Property Already exist in Compare.");
    }
  }

  // Remove From  Wishlist
  @Action(RemoveCompareItem)
  removeWishlist(ctx: StateContext<CompareModel>, action: RemoveCompareItem) {
    const state = ctx.getState();

    let cart = state.data.compare.filter((value) => value.id != action.id);

    ctx.patchState({
      data: {
        compare: cart,
      },
    });
    this.toastr.success("Property has been removed from Compare.");
  }
}
