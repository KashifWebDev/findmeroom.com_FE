import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";


import { Observable, map } from "rxjs";

import {
  IAgencyData,
  IAgentsData,
  IAgentsDetails,
  IBannerData,
  IBlogDetailsData,
  IBrandData,
  ICurrency,
  IFaqData,
  IFeaturedPropertyData,
  IHappyClientsData,
  IHomeSectionData,
  ILatestBlogData,
  ILatestForRent,
  ILatestForRentData,
  ILatestForSale,
  ILatestForSaleData,
  INewOfferData,
  IPeopleSayData,
  IPricingPlanData,
  IPrivacyData,
  IPropertyCityData,
  IPropertyDetailsData,
  IPropertyOfDayData,
  IProvidedServicesData,
  ISliderData,
  ITermsData,
} from "../interface/property";
import { LOCAL_STORAGE } from "../../core/tokens/local-storage.token";

@Injectable({
  providedIn: "root",
})
export class PropertyService {
  private storage = inject(LOCAL_STORAGE);
  private http = inject(HttpClient);

  // Get Currency
  public currencyItem: string | null = this.storage.getItem("currency");

  public Currency: ICurrency =
    this.currencyItem && this.isValidJson(this.currencyItem)
      ? JSON.parse(this.currencyItem)
      : { name: "Dollar", currency: "USD", symbol: "$", price: 1 };

  // Function to check if a string is valid JSON
  private isValidJson(str: string): boolean {
    try {
      JSON.parse(str);
      return true;
    } catch (error) {
      console.error("Invalid JSON format in localStorage['currency']", error);
      return false;
    }
  }

  // Home Slider Data
  homeSliderData(): Observable<IHomeSectionData> {
    return this.http.get<IHomeSectionData>(
      "assets/data/home-section-slider.json",
    );
  }

  // Latest For Sale
  propertyData(): Observable<ILatestForSaleData> {
    return this.http.get<ILatestForSaleData>(
      "assets/data/latest-for-sale.json",
    );
  }

  // Featured Property Data
  featuredPropertyData(): Observable<IFeaturedPropertyData> {
    return this.http.get<IFeaturedPropertyData>(
      "assets/data/featured-property.json",
    );
  }

  // Latest For Rent
  latestForRentData(): Observable<ILatestForRentData> {
    return this.http.get<ILatestForRentData>(
      "assets/data/latest-for-rent.json",
    );
  }

  // New Offer Data
  newOfferData(): Observable<INewOfferData> {
    return this.http.get<INewOfferData>("assets/data/new-offer.json");
  }

  // Property In City
  propertyInCityData(): Observable<IPropertyCityData> {
    return this.http.get<IPropertyCityData>(
      "assets/data/property-in-city.json",
    );
  }

  // Banner
  bannerData(): Observable<IBannerData> {
    return this.http.get<IBannerData>("assets/data/banner.json");
  }

  // Agents Data
  agentsData(): Observable<IAgentsData> {
    return this.http.get<IAgentsData>("assets/data/agents.json");
  }

  // Happy Clients Data
  happyClientsData(): Observable<IHappyClientsData> {
    return this.http.get<IHappyClientsData>("assets/data/happy-clients.json");
  }

  // Brand Data
  brandData(): Observable<IBrandData> {
    return this.http.get<IBrandData>("assets/data/brand.json");
  }

  // Provided Services
  providesServices(): Observable<IProvidedServicesData> {
    return this.http.get<IProvidedServicesData>(
      "assets/data/provided-services.json",
    );
  }

  // Pricing Plan
  pricingPlanData(): Observable<IPricingPlanData> {
    return this.http.get<IPricingPlanData>("assets/data/pricing-plan.json");
  }

  // Latest Blog
  latestBlogData(): Observable<ILatestBlogData> {
    return this.http.get<ILatestBlogData>("assets/data/latest-blog.json");
  }

  // Property Of Day
  propertyOfDayData(): Observable<IPropertyOfDayData> {
    return this.http.get<IPropertyOfDayData>(
      "assets/data/property-of-day.json",
    );
  }

  // People Say
  peopleSayData(): Observable<IPeopleSayData> {
    return this.http.get<IPeopleSayData>("assets/data/people-say.json");
  }

  // Property Details
  propertyDetailsData(): Observable<IPropertyDetailsData> {
    return this.http.get<IPropertyDetailsData>(
      "assets/data/property-details.json",
    );
  }

  // Blog DetailsData
  blogDetailsData(): Observable<IBlogDetailsData> {
    return this.http.get<IBlogDetailsData>("assets/data/blog-details.json");
  }

  // Agency Data
  agencyData(): Observable<IAgencyData> {
    return this.http.get<IAgencyData>("assets/data/agency.json");
  }

  // FAQ Data
  faqData(): Observable<IFaqData> {
    return this.http.get<IFaqData>("assets/data/faq.json");
  }

  // Terms Condition Data
  termsConditionData(): Observable<ITermsData> {
    return this.http.get<ITermsData>("assets/data/terms-condition.json");
  }

  // Privacy Policy Data
  privacyPolicyData(): Observable<IPrivacyData> {
    return this.http.get<IPrivacyData>("assets/data/privacy-policy.json");
  }

  // Agents Details Data
  agentsDetailsData(): Observable<IAgentsDetails> {
    return this.http.get<IAgentsDetails>("assets/data/agents-data.json");
  }

  // Slider Data For Image Content Page
  public getSliderData(): Observable<ISliderData> {
    return this.http.get<ISliderData>("assets/data/slider.json");
  }

  // Filter Property
  public filterData: ILatestForRent;
  public filterPropertyData(filter: string[]): Observable<ILatestForRent[]> {
    return this.latestForRentData().pipe(
      map((property) =>
        property.latestForRent.filter((item: ILatestForRent) => {
          if (!filter.length) {
            return !!item.params;
          }

          return item.params?.some((param) => filter.includes(param)) ?? false;
        }),
      ),
    );
  }

  // For Get Images By ID
  public imageData: ILatestForSale[] = [];
  public propertyDetail: ILatestForRent[] = [];

  public getImage(id: string): Observable<ILatestForSale[] | ILatestForRent[]> {
    if (id && id.includes("b")) {
      return this.propertyData().pipe(
        map((property) => {
          this.imageData = property.latestForSale.filter(
            (data: ILatestForSale) => data.id === id,
          );
          return this.imageData;
        }),
      );
    } else {
      return this.latestForRentData().pipe(
        map((property) => {
          this.propertyDetail = property.latestForRent.filter(
            (data: ILatestForRent) => data.id === +id,
          );
          return this.propertyDetail;
        }),
      );
    }
  }

  // Get Property Details
  public propertyDetails: ILatestForRent[];
  public getPropertyDetail(id: number): Observable<ILatestForRent[]> {
    return this.latestForRentData().pipe(
      map(
        (property) =>
          (this.propertyDetails = property.latestForRent.filter((data) => {
            return data.id == id;
          })),
      ),
    );
  }

  // Pagination
  public getPager(
    totalItems: number,
    currentPage: number = 1,
    pageSize: number = 6,
  ) {
    // calculate total pages
    let totalPages = Math.ceil(totalItems / pageSize);

    // Paginate Range
    let paginateRange = 3;

    // ensure current page isn't out of range
    if (currentPage < 1) {
      currentPage = 1;
    } else if (currentPage > totalPages) {
      currentPage = totalPages;
    }

    let startPage: number, endPage: number;
    if (totalPages <= 5) {
      startPage = 1;
      endPage = totalPages;
    } else if (currentPage < paginateRange - 1) {
      startPage = 1;
      endPage = startPage + paginateRange - 1;
    } else {
      startPage = currentPage - 1;
      endPage = currentPage + 1;
    }

    // calculate start and end item indexes
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    let pages = Array.from(Array(endPage + 1 - startPage).keys()).map(
      (i) => startPage + i,
    );

    // return object with all pager properties required by the view
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages,
    };
  }
}
