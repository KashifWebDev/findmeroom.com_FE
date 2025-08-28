import { Injectable, inject } from "@angular/core";

import { Action, Selector, State, StateContext } from "@ngxs/store";
import { tap } from "rxjs";

import { ILatestForRent } from "../../interface/property";
import { PropertyService } from "../../services/property.service";
import { GetCategory } from "../actions/category.action";

export class CategoryModel {
  data: {
    category: ILatestForRent[];
  };
}

@State<CategoryModel>({
  name: "category",
  defaults: {
    data: {
      category: [],
    },
  },
})
@Injectable()
export class CategoryState {
  private propertyService = inject(PropertyService);

  public categoryData: ILatestForRent[];
  public date1: Date;
  public date2: Date;

  @Selector()
  static category(state: CategoryModel) {
    return state.data.category;
  }

  @Action(GetCategory)
  getData(ctx: StateContext<CategoryModel>, action: GetCategory) {
    return this.propertyService.filterPropertyData(action.tags).pipe(
      tap((res) => {
        // Price & Area
        if (
          (action.price.minPrice != 0 || action.price.maxPrice != 0) &&
          (action.area.minArea != 0 || action.area.maxArea != 0)
        ) {
          this.categoryData = res.filter(
            (item: { price: number; sqft: number }) =>
              item.price >= action.price.minPrice &&
              item.price <= action.price.maxPrice &&
              item.sqft >= action.area.minArea &&
              item.sqft <= action.area.maxArea,
          );

          // Price Only
        } else if (action.price.minPrice != 0 || action.price.maxPrice != 0) {
          this.categoryData = res.filter(
            (item: { price: number }) =>
              item.price >= action.price.minPrice &&
              item.price <= action.price.maxPrice,
          );

          // Area Only
        } else if (action.area.minArea != 0 || action.area.maxArea != 0) {
          this.categoryData = res.filter(
            (item: { sqft: number }) =>
              item.sqft >= action.area.minArea &&
              item.sqft <= action.area.maxArea,
          );

          // Sort By Oldest Date
        } else if (action.filterValue === "oldest") {
          this.categoryData = res.sort(
            (a: { date: string }, b: { date: string }) => {
              this.date1 = new Date(a.date);
              this.date2 = new Date(b.date);
              if (this.date1 < this.date2) {
                return -1;
              } else if (this.date1 > this.date2) {
                return 1;
              } else return 0;
            },
          );

          // Sort By Newest Date
        } else if (action.filterValue === "newest") {
          this.categoryData = res.sort(
            (a: { date: string }, b: { date: string }) => {
              this.date1 = new Date(a.date);
              this.date2 = new Date(b.date);
              if (this.date1 > this.date2) {
                return -1;
              } else if (this.date1 < this.date2) {
                return 1;
              } else return 0;
            },
          );

          // Sort By High To Low Price
        } else if (action.filterValue === "high-price") {
          this.categoryData = res.sort(
            (a: { price: number }, b: { price: number }) => {
              if (a.price > b.price) {
                return -1;
              } else if (a.price < b.price) {
                return 1;
              } else return 0;
            },
          );

          // Sort By Low To High Price
        } else if (action.filterValue === "low-price") {
          this.categoryData = res.sort(
            (a: { price: number }, b: { price: number }) => {
              if (a.price < b.price) {
                return -1;
              } else if (a.price > b.price) {
                return 1;
              } else return 0;
            },
          );

          // No Price & Area
        } else {
          this.categoryData = res;
        }

        ctx.setState({
          data: {
            category: this.categoryData,
          },
        });
      }),
    );
  }
}
