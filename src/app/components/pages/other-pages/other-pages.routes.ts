import { Routes } from "@angular/router";

import { AboutUs1 } from "./about-us1/about-us1";
import { AboutUs2 } from "./about-us2/about-us2";
import { ComingSoon1 } from "./coming-soon1/coming-soon1";
import { ComingSoon2 } from "./coming-soon2/coming-soon2";
import { ComingSoon3 } from "./coming-soon3/coming-soon3";
import { ErrorPage404 } from "./error-page404/error-page404";
import { Faq } from "./faq/faq";
import { ForgotPassword } from "./forgot-password/forgot-password";
import { LogIn } from "./log-in/log-in";
import { Pricing } from "./pricing/pricing";
import { PrivacyPolicy } from "./privacy-policy/privacy-policy";
import { Services } from "./services/services";
import { SignUp } from "./sign-up/sign-up";
import { SignUpWizard } from "./sign-up-wizard/sign-up-wizard";
import { TermsCondition } from "./terms-condition/terms-condition";

export default [
  {
    path: "about-us-1",
    component: AboutUs1,
  },
  {
    path: "about-us-2",
    component: AboutUs2,
  },
  {
    path: "services",
    component: Services,
  },
  {
    path: "pricing",
    component: Pricing,
  },
  {
    path: "coming-soon-1",
    component: ComingSoon1,
  },
  {
    path: "coming-soon-2",
    component: ComingSoon2,
  },
  {
    path: "coming-soon-3",
    component: ComingSoon3,
  },
  {
    path: "404",
    component: ErrorPage404,
  },
  {
    path: "faq",
    component: Faq,
  },
  {
    path: "log-in",
    component: LogIn,
  },
  {
    path: "sign-up",
    component: SignUp,
  },
  {
    path: "sign-up-wizard",
    component: SignUpWizard,
  },
  {
    path: "forgot-password",
    component: ForgotPassword,
  },
  {
    path: "terms-conditions",
    component: TermsCondition,
  },
  {
    path: "privacy-policy",
    component: PrivacyPolicy,
  },
] as Routes;
