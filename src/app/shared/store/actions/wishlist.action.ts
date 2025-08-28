import { ILatestForRent } from "../../interface/property";

// WishList
export class AddWishlistItem {
  static readonly type = "[wishlist] Add";
  constructor(public payload: ILatestForRent) {}
}

export class GetWishlistData {
  static readonly type = "[wishlist] Get";
}

export class RemoveWishlistItem {
  static readonly type = "[wishlist] Delete";
  constructor(public id: number) {}
}
