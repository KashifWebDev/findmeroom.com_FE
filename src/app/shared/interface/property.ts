export interface IImages {
  img: string;
  icon?: string;
}

export interface IList {
  data: string;
}

export interface IImg {
  url: string;
  fileType: string;
  title?: string;
  description?: string;
}

export interface IDetails {
  data: string;
  svgIcon: string;
}

export interface IHomeSectionData {
  homeSection: IHomeSectionSlider[];
}
export interface IHomeSectionSlider {
  id: number;
  type: string;
  img?: string;
  images?: IImages[];
  title?: string;
  subTitle?: string;
  buttonText?: string;
  path?: string;
  bad?: number;
  bath?: number;
  sqft?: number;
  price?: number;
}

export interface ILatestForSaleData {
  latestForSale: ILatestForSale[];
}

export interface ILatestForSale {
  id: string;
  title?: string;
  propertyStatus?: string;
  type?: string;
  label?: string[];
  price: number;
  bed?: number;
  bath?: number;
  balcony?: number;
  area?: number;
  url?: string;
  date?: string;
  sale?: boolean;
  fees?: boolean;
  openHouse?: boolean;
  sold?: boolean;
  img?: IImg[];
}

export interface IFeaturedPropertyData {
  featuredProperty: IFeaturedProperty[];
}
export interface IFeaturedProperty {
  id: number;
  city: string;
  title: string;
  label?: string;
  price: number;
  description: string;
  bed: string;
  bath: string;
  sqft: string;
  homeType?: string;
  img?: string;
  thumb?: string;
  imgLabel?: string;
  sign?: string;
  type: string;
  tag?: string;
  images?: IImg[];
}

export interface ILatestForRentData {
  latestForRent: ILatestForRent[];
}

export interface ILatestForRent {
  id: number;
  type: string;
  img: IImg[];
  thumbnail: string;
  propertyStatus: string;
  country: string;
  title: string;
  price: number;
  details: string;
  home?: string;
  bed: string;
  bath: string;
  sqft: number;
  rooms: number;
  date: string;
  propertyType: string | number;
  agencies: string;
  labels: string[];
  sale?: boolean;
  fees?: boolean;
  openHouse?: boolean;
  sold?: boolean;
  params?: string[];
  propertyTab?: number;
  url?: string;
}

export interface INewOfferData {
  newOffer: INewOffer[];
}

export interface INewOffer {
  id: number;
  type: string;
  img: string;
  heading?: string;
  title?: string;
  desc?: string;
}

export interface IPropertyCityData {
  property: IPropertyInCity[];
}

export interface IPropertyInCity {
  id: number;
  type: string;
  img: string;
  property?: number;
  city: string;
  text?: string;
  colClass?: boolean;
}

export interface IBannerData {
  banner: IBanner[];
}
export interface IBanner {
  id: number;
  type: string;
  img?: string;
  title: string;
  subTitle?: string;
  desc: string;
  button1Text?: string;
  button2Text?: string;
}

export interface IAgentsData {
  agents: IAgents[];
}
export interface IAgents {
  id: number;
  type: string;
  img: string;
  name: string;
  title: string;
  email: string;
  desc: string;
}

export interface IHappyClientsData {
  clients: IHappyClients[];
}

export interface IHappyClients {
  id: number;
  type: string;
  images: IImages[];
  desc: string;
  title: string;
  name: string;
  email?: string;
}
export interface IBrandData {
  brand: IBrand[];
}
export interface IBrand {
  id: number;
  type: string;
  img: string;
}

export interface IProvidedServicesData {
  services: IProvidedServices[];
}

export interface IProvidedServices {
  id: number;
  type: string;
  img?: string;
  icon?: string;
  title: string;
  desc: string;
}

export interface IPricingPlanData {
  pricingPlan: IPricingPlan[];
}

export interface IPricingPlan {
  id: number;
  type: string;
  icon: string;
  heading: string;
  desc: string;
  details: IList[];
  price: number;
}

export interface ILatestBlogData {
  latestBlog: ILatestBlog[];
}

export interface ILatestBlog {
  id: number;
  type: string;
  img: string;
  date: string;
  month: string;
  city: string;
  title: string;
  desc: string;
  right?: boolean;
}

export interface IPropertyOfDayData {
  propertyOfDay: IPropertyOfDay[];
}

export interface IPropertyOfDay {
  id: number;
  type: string;
  images: IImages[];
  location: string;
  city: string;
  desc: string;
  sqft: string;
  price: number;
  title: string;
}

export interface IPeopleSayData {
  peopleSay: IPeopleSay[];
}

export interface IPeopleSay {
  id: number;
  type: string;
  img: string;
  name: string;
  position: string;
  desc: string;
}

export interface IPropertySearch {
  id: number;
  heading: string;
  button: boolean;
  listData: IList[];
}

export interface IMarkersData {
  position: {
    lat: number;
    lng: number;
  };
  label: {
    color: string;
    text: string;
  };
}

export interface IStickTabHome {
  title: string;
  city: string;
  details: IDetails[];
  price: number;
}

export interface IPropertyBrief {
  desc: string;
}

export interface IFeaturesData {
  features: IFeature[];
}

export interface IFeature {
  title: string;
  icon: string;
}

export interface IPropertyDetails {
  title: string;
  data: string;
}

export interface IReview {
  name: string;
  img: string;
  date: string;
  description: string;
  rating: number;
  right: boolean;
}

export interface IGridImage {
  url: string;
  fileType: string;
  title: string;
  description: string;
  type: string;
  colClass: string;
}

export interface IParallaxImage {
  url: string;
  fileType?: string;
  title: string;
  description: string;
  right?: boolean;
  type?: string;
}

export interface ICreative3 {
  url: string;
  fileType: string;
  type: string;
  colClass: string;
}

export interface IBlogDetailsData {
  blogDetails: IBlogDetails[];
  commentsData: IComments[];
}
export interface IBlogDetails {
  id: number;
  images: IImg[];
  date: string;
  posted_by: string;
  hits: number;
  comments: number;
  title: string;
  description: IDescription[];
}

export interface IDescription {
  details: string;
}

export interface IComments {
  name: string;
  img: string;
  date: string;
  description: string;
  right: boolean;
}

export interface IAgencyData {
  agencyData: IAgency[];
  agentsData: IAgencyAgent[];
  allAgencyData: IAgencyAgent[];
}

export interface IAgency {
  id: number;
  title: string;
  subTitle: string;
  img: string;
  location: string;
  mobile: string;
  email: string;
  link: string;
  property: number;
  aboutAgency: IDescription[];
}

export interface IAgencyAgent {
  id: number;
  title: string;
  subTitle: string;
  img: string;
  mobile: string;
  email: string;
  fax: string;
  property: number;
}

export interface IFaqData {
  faq: IFaq[];
}
export interface IFaq {
  id: number;
  title: string;
  description: string;
  panelNumber: string;
}

export interface ITermsData {
  terms: ITermsConditionDetails[];
}

export interface ITermsConditionDetails {
  title: string;
  value: string;
  details: ITermsDetails[];
}

export interface ITermsDetails {
  description: string;
}

export interface IPrivacyData {
  privacy: IPrivacyPolicy[];
}

export interface IPrivacyPolicy {
  title: string;
  value: string;
  details: IPolicyDetails[];
}

export interface IPolicyDetails {
  description: string;
}

export interface IAgentsDetails {
  agentsProfileDetails: IAgency[];
}

export interface ITagData {
  category: string;
  status: string;
  rooms: string;
  beds: string;
  bath: string;
  agency: string;
  minPrice: number;
  maxPrice: number;
  minArea: number;
  maxArea: number;
}

export interface IPriceFilter {
  minPrice: number;
  maxPrice: number;
}

export interface IAreaFilter {
  minArea: number;
  maxArea: number;
}

export interface IStatusParams {
  status: string;
}

export interface ICategoryParams {
  category: string;
}

export interface IRoomsParams {
  room: string;
}

export interface IBedParams {
  bed: string;
}

export interface IBathParams {
  bath: string;
}

export interface IAgencyParams {
  agency: string;
}

export interface ICurrency {
  name: string;
  currency: string;
  symbol: string;
  price: number;
}

export interface ISlider {
  id: number;
  url: string;
  propertyType: string;
  propertyStatus: string;
}

export interface IPagination {
  totalItems: number;
  currentPage: number;
  pageSize: number;
  totalPages: number;
  startPage: number;
  endPage: number;
  startIndex: number;
  endIndex: number;
  pages: number[];
}

export interface IPropertyDetailsData {
  data: IDetailsData[];
  propertyFilterSlider: IImg[];
  propertyImages: IImg[];
  propertyImageSliderHome: IImg[];
  propertyImageSliderImage: IImageSlider[];
  gridImages: IGridImages[];
  parallaxImagesData: IImg[];
  creativePageData: IGridImages[];
  creativePage2Data: IGridImages[];
  creativePage3Data: IGridImages[];
}

export interface IDetailsData {
  title: string;
  value: string;
  slugTitle: string;
  details: IDetailsProperty[];
}

export interface IDetailsProperty {
  desc: string;
  features: IFeature[];
  url: string;
  fileType: string;
  title: string;
  name: string;
  img: string;
  date: string;
  description: string;
  rating: number;
  right: boolean;
  data: string;
}

export interface IFeatures {
  title: string;
  icon: string;
}

export interface IImageSlider {
  images: IImg[];
}

export interface IGridImages {
  url: string;
  fileType: string;
  title?: string;
  description: string;
  type?: string;
  colClass?: string;
  right?: boolean;
}

export interface ICreativePageData {
  url: string;
  fileType: string;
  title: string;
  description: string;
  right: boolean;
}

export interface ICreativePage2Data {
  url?: string;
  type?: string;
  title?: string;
  description?: string;
}

export interface ICreativePage3Data {
  url: string;
  fileType: string;
  type: string;
  colClass: string;
}

export interface ISliderData {
  slider: ISliderImagesData[];
}

export interface ISliderImagesData {
  id: number;
  url: string;
  propertyType: string;
  propertyStatus: string;
}

export interface IAccountInformation {
  user_name: string;
  mobile: number;
  email: string;
  password: string;
}

export interface IAddressInformation {
  address: string;
  city: string;
  state: string;
  country: string;
  pin_code: number;
}
