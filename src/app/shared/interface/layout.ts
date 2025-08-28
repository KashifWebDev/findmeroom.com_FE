export interface ILayout {
  path?: string;
  style: string;
  footerStyle: string;
  headerLogo: string;
  darkHeaderLogo: string;
  footerLogo: string;
  darkFooterLogo: string;
  headerClass?: string;
  headerFix?: boolean;
  footerClass?: string;
  footerDark?: boolean;
  subFooterClass?: string;
  heartIcon?: boolean;
  loaderType: string;
  divClass: string;
  themeColor1: string;
  themeColor2?: string;
  localStorageColor1: string;
  localStorageColor2?: string;
}
