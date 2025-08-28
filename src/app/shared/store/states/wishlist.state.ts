import { Injectable, inject } from "@angular/core";

import { Action, Selector, State, StateContext } from "@ngxs/store";
import { ToastrService } from "ngx-toastr";

import { ILatestForRent } from "../../interface/property";
import {
  AddWishlistItem,
  GetWishlistData,
  RemoveWishlistItem,
} from "../actions/wishlist.action";

export class WishlistModel {
  data: {
    wishlist: ILatestForRent[];
  };
}

@State<WishlistModel>({
  name: "wishlist",
  defaults: {
    data: {
      wishlist: [],
    },
  },
})
@Injectable()
export class WishlistState {
  private toastr = inject(ToastrService);

  @Selector()
  static GetWishlistData(state: WishlistModel) {
    return state.data.wishlist;
  }

  // Get WishList Data
  @Action(GetWishlistData)
  getwishlist(ctx: StateContext<WishlistModel>) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
    });
  }

  // Add To Wishlist
  @Action(AddWishlistItem)
  addwishlistData(ctx: StateContext<WishlistModel>, action: AddWishlistItem) {
    const state = ctx.getState();

    const wishlistData = state.data.wishlist.find(
      (item: { id: number }) => item.id === action.payload.id,
    );

    if (!wishlistData) {
      ctx.patchState({
        data: {
          wishlist: [...state.data.wishlist, action.payload],
        },
      });
      this.toastr.success("Property has been added in wishlist.");
    } else {
      this.toastr.error("Property Already exist in wishlist.");
    }
  }

  // Remove From  Wishlist
  @Action(RemoveWishlistItem)
  removeWishlist(ctx: StateContext<WishlistModel>, action: RemoveWishlistItem) {
    const state = ctx.getState();

    let cart = state.data.wishlist.filter((value) => value.id != action.id);

    ctx.patchState({
      data: {
        wishlist: cart,
      },
    });
    this.toastr.success("Property has been removed from wishlist.");
  }
}
