import { Injectable } from "@angular/core";

import { BehaviorSubject } from "rxjs";

// Menu
export interface IMenu {
  items?: IMenu[];
  path?: string;
  title?: string;
  icon?: string;
  type?: string;
  megaMenu?: boolean;
  image?: string;
  active?: boolean;
  badge?: boolean;
  badgeText?: string;
  badgeIcon?: boolean;
  children?: IMenu[];
  level?: number;
  section?: IMenu[];
  right?: boolean;
}

@Injectable({
  providedIn: "root",
})
export class NavService {
  public MENUITEMS: IMenu[] = [
    {
      title: "home",
      icon: "home",
      type: "sub",
      active: false,
      level: 1,
      children: [
        {
          title: "slider filter search",
          path: "/theme/slider-filter-search",
          type: "link",
        },
        {
          title: "corporate",
          path: "/theme/corporate",
          type: "link",
        },
        {
          title: "enterprise",
          path: "/theme/enterprise",
          type: "link",
        },
        {
          title: "classic",
          path: "/theme/classic",
          type: "link",
          badge: true,
          badgeText: "New",
        },
        {
          title: "image with content",
          path: "/theme/image-content",
          type: "link",
        },
        {
          title: "modern",
          path: "/theme/modern",
          type: "link",
          badge: true,
          badgeText: "New",
        },
        {
          title: "parallax image",
          path: "/theme/parallax-image",
          type: "link",
        },
        {
          title: "search Tab",
          path: "/theme/search-tab",
          type: "link",
        },
        {
          title: "typed image",
          path: "/theme/typed-image",
          type: "link",
        },
        {
          title: "morden video",
          path: "/theme/morden-video",
          type: "link",
        },
        {
          title: "map with v-search",
          path: "/theme/map-v-search",
          type: "link",
        },
        {
          title: "map with h-search",
          path: "/theme/map-h-search",
          type: "link",
        },
      ],
    },
    {
      title: "listing",
      icon: "clipboard",
      type: "sub",
      level: 1,
      active: false,
      children: [
        {
          title: "grid View",
          type: "sub",
          active: false,
          level: 2,
          children: [
            {
              title: "2 grid",
              type: "sub",
              active: false,
              level: 3,
              children: [
                {
                  title: "left sidebar",
                  path: "/listing/grid-view/2-grid/left-sidebar",
                  type: "link",
                  level: 4,
                },
                {
                  title: "right sidebar",
                  path: "/listing/grid-view/2-grid/right-sidebar",
                  type: "link",
                  level: 4,
                },
                {
                  title: "no sidebar",
                  path: "/listing/grid-view/2-grid/no-sidebar",
                  type: "link",
                  level: 4,
                },
              ],
            },
            {
              title: "3 Grid",
              type: "sub",
              active: false,
              level: 3,
              children: [
                {
                  title: "left sidebar",
                  path: "/listing/grid-view/3-grid/left-sidebar",
                  type: "link",
                  level: 4,
                },
                {
                  title: "right sidebar",
                  path: "/listing/grid-view/3-grid/right-sidebar",
                  type: "link",
                  level: 4,
                },
                {
                  title: "no sidebar",
                  path: "/listing/grid-view/3-grid/no-sidebar",
                  type: "link",
                  level: 4,
                },
              ],
            },
            {
              title: "slider",
              path: "/listing/grid-view/slider",
              type: "link",
              level: 4,
            },
            {
              title: "map",
              type: "sub",
              active: false,
              level: 3,
              children: [
                {
                  title: "google map",
                  path: "/listing/grid-view/map/google-map",
                  type: "link",
                  level: 4,
                },
                {
                  title: "leaflet map",
                  path: "/listing/grid-view/map/leaflet-map",
                  type: "link",
                  level: 4,
                },
              ],
            },
            {
              title: "map modal",
              type: "sub",
              active: false,
              level: 3,
              children: [
                {
                  title: "google map",
                  path: "/listing/grid-view/map-modal/google-map",
                  type: "link",
                  level: 4,
                },
                {
                  title: "leaflet map",
                  path: "/listing/grid-view/map-modal/leaflet-map",
                  type: "link",
                  level: 4,
                },
              ],
            },
            {
              title: "left side map",
              type: "sub",
              active: false,
              level: 3,
              children: [
                {
                  title: "google map",
                  path: "/listing/grid-view/left-side-map/google-map",
                  type: "link",
                  level: 4,
                },
                {
                  title: "leaflet map",
                  path: "/listing/grid-view/left-side-map/leaflet-map",
                  type: "link",
                  level: 4,
                },
              ],
            },
            {
              title: "on click map",
              type: "sub",
              active: false,
              level: 3,
              children: [
                {
                  title: "google map",
                  path: "/listing/grid-view/on-click-map/google-map",
                  type: "link",
                  level: 4,
                },
                {
                  title: "leaflet map",
                  path: "/listing/grid-view/on-click-map/leaflet-map",
                  type: "link",
                  level: 4,
                },
              ],
            },
            {
              title: "map header",
              type: "sub",
              active: false,
              level: 3,
              children: [
                {
                  title: "google map",
                  path: "/listing/grid-view/map-header/google-map",
                  type: "link",
                  level: 4,
                },
                {
                  title: "leaflet map",
                  path: "/listing/grid-view/map-header/leaflet-map",
                  type: "link",
                  level: 4,
                },
              ],
            },
          ],
        },
        {
          title: "list view",
          type: "sub",
          active: false,
          level: 2,
          children: [
            {
              title: "listing",
              type: "sub",
              active: false,
              level: 3,
              children: [
                {
                  title: "left sidebar",
                  path: "/listing/list-view/listing/left-sidebar",
                  type: "link",
                  level: 4,
                },
                {
                  title: "right sidebar",
                  path: "/listing/list-view/listing/right-sidebar",
                  type: "link",
                  level: 4,
                },
                {
                  title: "no sidebar",
                  path: "/listing/list-view/listing/no-sidebar",
                  type: "link",
                  level: 4,
                },
              ],
            },
            {
              title: "map",
              type: "sub",
              active: false,
              level: 3,
              children: [
                {
                  title: "google map",
                  path: "/listing/list-view/map/google-map",
                  type: "link",
                  level: 4,
                },
                {
                  title: "leaflet map",
                  path: "/listing/list-view/map/leaflet-map",
                  type: "link",
                  level: 4,
                },
              ],
            },
            {
              title: "slider",
              path: "/listing/list-view/slider",
              type: "link",
              level: 2,
            },
            {
              title: "thumbnail image",
              path: "/listing/list-view/thumbnail-image",
              type: "link",
              level: 2,
            },
            {
              title: "video",
              path: "/listing/list-view/video",
              type: "link",
              level: 2,
            },
          ],
        },
        {
          title: "tab layout",
          type: "sub",
          active: false,
          level: 2,
          children: [
            {
              title: "tab full width",
              path: "/listing/tab-layout/tab-full-width",
              type: "link",
              level: 3,
            },
            {
              title: "tab left sidebar",
              path: "/listing/tab-layout/tab-left-sidebar",
              type: "link",
              level: 3,
            },
            {
              title: "tab right sidebar",
              path: "/listing/tab-layout/tab-right-sidebar",
              type: "link",
              level: 3,
            },
          ],
        },
      ],
    },
    {
      title: "property",
      icon: "link",
      type: "sub",
      active: false,
      children: [
        {
          title: "sticky tab or classic",
          path: "/property/sticky-tab",
          type: "link",
        },
        {
          title: "Without top",
          path: "/property/without-top",
          type: "link",
        },
        {
          title: "Left sidebar",
          path: "/property/left-sidebar",
          type: "link",
        },
        {
          title: "Info tab",
          path: "/property/info-tab",
          type: "link",
        },
        {
          title: "Image slider",
          path: "/property/image-slider",
          type: "link",
        },
        {
          title: "thumbnail image",
          path: "/property/thumbnail-image",
          type: "link",
        },
        {
          title: "image box",
          path: "/property/image-box",
          type: "link",
        },
        {
          title: "Template breadcrumb",
          path: "/property/template-breadcrumb",
          type: "link",
        },
        {
          title: "modal details",
          path: "/property/modal-details",
          type: "link",
          badgeIcon: true,
        },
      ],
    },
    {
      title: "pages",
      icon: "layers",
      active: false,
      type: "sub",
      level: 1,
      megaMenu: true,
      children: [
        {
          title: "Portfolio",
          active: false,
          children: [
            {
              title: "2 grid",
              path: "/page/portfolio/2-grid",
              type: "link",
            },
            {
              title: "3 grid",
              path: "/page/portfolio/3-grid",
              type: "link",
            },
            {
              title: "4 grid",
              path: "/page/portfolio/4-grid",
              type: "link",
            },
            {
              title: "2 grid title",
              path: "/page/portfolio/2-grid-title",
              type: "link",
            },
            {
              title: "3 grid title",
              path: "/page/portfolio/3-grid-title",
              type: "link",
            },
            {
              title: "4 grid title",
              path: "/page/portfolio/4-grid-title",
              type: "link",
            },
            {
              title: "3 masonry",
              path: "/page/portfolio/3-masonry",
              type: "link",
            },
            {
              title: "4 masonry",
              path: "/page/portfolio/4-masonry",
              type: "link",
            },
            {
              title: "parallax",
              path: "/page/portfolio/parallax",
              type: "link",
            },
            {
              title: "center slides",
              path: "/page/portfolio/center-slide",
              type: "link",
            },
            {
              title: "Creative 1",
              path: "/page/portfolio/creative-1",
              type: "link",
            },
            {
              title: "Creative 2",
              path: "/page/portfolio/creative-2",
              type: "link",
            },
            {
              title: "Creative 3",
              path: "/page/portfolio/creative-3",
              type: "link",
              badgeIcon: true,
            },
            {
              title: "Creative 4",
              path: "/page/portfolio/creative-4",
              type: "link",
            },
            {
              title: "Details",
              path: "/page/portfolio/details",
              type: "link",
            },
          ],
        },
        {
          title: "Blog page",
          active: false,
          children: [
            {
              title: "left sidebar",
              path: "/page/blog-page/left-sidebar",
              type: "link",
            },
            {
              title: "right sidebar",
              path: "/page/blog-page/right-sidebar",
              type: "link",
            },
            {
              title: "no sidebar",
              path: "/page/blog-page/no-sidebar",
              type: "link",
            },
            {
              title: "creative left sidebar",
              path: "/page/blog-page/creative-left-sidebar",
              type: "link",
            },
            {
              title: "creative  right sidebar",
              path: "/page/blog-page/creative-right-sidebar",
              type: "link",
            },
            {
              title: "creative  no sidebar",
              path: "/page/blog-page/creative-no-sidebar",
              type: "link",
            },
            {
              title: "list left sidebar",
              path: "/page/blog-page/list-left-sidebar",
              type: "link",
            },
            {
              title: "list right sidebar",
              path: "/page/blog-page/list-right-sidebar",
              type: "link",
            },
            {
              title: "list no sidebar",
              path: "/page/blog-page/list-no-sidebar",
              type: "link",
            },
            {
              title: "masonry left sidebar",
              path: "/page/blog-page/masonry-left-sidebar",
              type: "link",
            },
            {
              title: "masonry right sidebar",
              path: "/page/blog-page/masonry-right-sidebar",
              type: "link",
            },
            {
              title: "masonry no sidebar",
              path: "/page/blog-page/masonry-no-sidebar",
              type: "link",
            },
            {
              title: "mix list left sidebar",
              path: "/page/blog-page/mix-list-left-sidebar",
              type: "link",
            },
            {
              title: "mix list right sidebar",
              path: "/page/blog-page/mix-list-right-sidebar",
              type: "link",
            },
            {
              title: "mix grid left sidebar",
              path: "/page/blog-page/mix-grid-left-sidebar",
              type: "link",
            },
            {
              title: "mix grid right sidebar",
              path: "/page/blog-page/mix-grid-right-sidebar",
              type: "link",
            },
          ],
        },
        {
          section: [
            {
              title: "blog detail pages",
              active: false,
              children: [
                {
                  title: "left sidebar",
                  path: "/page/blog-detail/left-sidebar",
                  type: "link",
                },
                {
                  title: "right sidebar",
                  path: "/page/blog-detail/right-sidebar",
                  type: "link",
                },
                {
                  title: "no sidebar",
                  path: "/page/blog-detail/no-sidebar",
                  type: "link",
                },
                {
                  title: "detail with gallery",
                  path: "/page/blog-detail/detail-with-gallery",
                  type: "link",
                },
                {
                  title: "detail with video",
                  path: "/page/blog-detail/detail-with-video",
                  type: "link",
                },
              ],
            },
            {
              title: "elements - breadcrumb",
              active: false,
              children: [
                {
                  title: "basic",
                  path: "/page/breadcrumb/basic",
                  type: "link",
                },
                {
                  title: "image with effect",
                  path: "/page/breadcrumb/image-with-effect",
                  type: "link",
                  badge: true,
                  badgeText: "New",
                },
                {
                  title: "right content",
                  path: "/page/breadcrumb/right-content",
                  type: "link",
                },
                {
                  title: "only image",
                  path: "/page/breadcrumb/only-image",
                  type: "link",
                },
                {
                  title: "small",
                  path: "/page/breadcrumb/small",
                  type: "link",
                },
                {
                  title: "gradient",
                  path: "/page/breadcrumb/gradient",
                  type: "link",
                },
              ],
            },
          ],
        },
        {
          section: [
            {
              title: "Agency",
              active: false,
              children: [
                {
                  title: "agency profile",
                  path: "/page/agency/agency-profile",
                  type: "link",
                },
                {
                  title: "agency grid",
                  path: "/page/agency/agency-grid",
                  type: "link",
                },
                {
                  title: "agency list",
                  path: "/page/agency/agency-list",
                  type: "link",
                },
              ],
            },
            {
              title: "Email template",
              active: false,
              children: [
                {
                  title: "offer",
                  path: "https://themes.pixelstrap.com/sheltos/email-template/offer.html",
                  type: "extTabLink",
                },
                {
                  title: "confirmation",
                  path: "https://themes.pixelstrap.com/sheltos/email-template/confirmation.html",
                  type: "extTabLink",
                },
                {
                  title: "thank you",
                  path: "https://themes.pixelstrap.com/sheltos/email-template/thankyou.html",
                  type: "extTabLink",
                },
              ],
            },
            {
              title: "User panel",
              active: false,
              children: [
                {
                  title: "user dashboard",
                  path: "/page/user/user-dashboard",
                  type: "link",
                  badgeIcon: true,
                },
                {
                  title: "my listing",
                  path: "/page/user/my-listing",
                  type: "link",
                },
                {
                  title: "create property",
                  path: "/page/user/create-property",
                  type: "link",
                },
                {
                  title: "my profile",
                  path: "/page/user/my-profile",
                  type: "link",
                },
                {
                  title: "favourites",
                  path: "/page/user/favourite",
                  type: "link",
                },
                {
                  title: "compare property",
                  path: "/page/user/compare-property",
                  type: "link",
                },
                {
                  title: "cards & payment",
                  path: "/page/user/cards-payment",
                  type: "link",
                },
                {
                  title: "privacy",
                  path: "/page/user/privacy",
                  type: "link",
                },
              ],
            },
          ],
        },
        {
          title: "other pages",
          active: false,
          children: [
            {
              title: "about us 1",
              path: "/page/other-pages/about-us-1",
              type: "link",
            },
            {
              title: "about us 2",
              path: "/page/other-pages/about-us-2",
              type: "link",
            },
            {
              title: "services",
              path: "/page/other-pages/services",
              type: "link",
            },
            {
              title: "pricing",
              path: "/page/other-pages/pricing",
              type: "link",
            },
            {
              title: "coming soon 1",
              path: "/page/other-pages/coming-soon-1",
              type: "link",
            },
            {
              title: "coming soon 2",
              path: "/page/other-pages/coming-soon-2",
              type: "link",
            },
            {
              title: "coming soon 3",
              path: "/page/other-pages/coming-soon-3",
              type: "link",
            },
            {
              title: "404",
              path: "/page/other-pages/404",
              type: "link",
            },
            {
              title: "FAQ",
              path: "/page/other-pages/faq",
              type: "link",
            },
            {
              title: "log in",
              path: "/page/other-pages/log-in",
              type: "link",
            },
            {
              title: "sign up",
              path: "/page/other-pages/sign-up",
              type: "link",
            },
            {
              title: "sign up wizard",
              path: "/page/other-pages/sign-up-wizard",
              type: "link",
              badgeIcon: true,
            },
            {
              title: "forgot password",
              path: "/page/other-pages/forgot-password",
              type: "link",
            },
            {
              title: "terms & conditions",
              path: "/page/other-pages/terms-conditions",
              type: "link",
            },
            {
              title: "privacy policy",
              path: "/page/other-pages/privacy-policy",
              type: "link",
            },
          ],
        },
      ],
    },
    {
      title: "modules",
      icon: "zap",
      active: false,
      type: "sub",
      level: 1,
      right: true,
      children: [
        {
          title: "Button",
          path: "/modules/button",
          type: "link",
        },
        {
          title: "Label",
          path: "/modules/label",
          type: "link",
        },
        {
          title: "Title",
          path: "/modules/title",
          type: "link",
        },
        {
          title: "Image ratio",
          path: "/modules/image-ratio",
          type: "link",
          badgeIcon: true,
        },
        {
          title: "footer",
          path: "/modules/footer",
          type: "link",
        },
        {
          title: "blog",
          path: "/modules/blog",
          type: "link",
        },
        {
          title: "brand",
          path: "/modules/brand",
          type: "link",
        },
        {
          title: "testimonial",
          path: "/modules/testimonial",
          type: "link",
        },
        {
          title: "full banner",
          path: "/modules/full-banner",
          type: "link",
        },
        {
          title: "about",
          path: "/modules/about",
          type: "link",
        },
        {
          title: "service",
          path: "/modules/service",
          type: "link",
        },
        {
          title: "property",
          path: "/modules/property",
          type: "link",
        },
        {
          title: "feature",
          path: "/modules/feature",
          type: "link",
        },
        {
          title: "others",
          path: "/modules/others",
          type: "link",
        },
      ],
    },
    {
      title: "agent",
      icon: "user",
      active: false,
      right: true,
      level: 1,
      type: "sub",
      children: [
        {
          title: "Agent Profile",
          path: "/agent/agent-profile",
          type: "link",
        },
        {
          title: "Agent Grid",
          path: "/agent/agent-grid",
          type: "link",
        },
        {
          title: "Agent List",
          path: "/agent/agent-list",
          type: "link",
        },
        {
          title: "Submit property",
          path: "/agent/submit-property",
          type: "link",
          badge: true,
          badgeText: "New",
        },
      ],
    },
    {
      title: "contact",
      icon: "map-pin",
      active: false,
      right: true,
      type: "sub",
      level: 1,
      children: [
        {
          title: "Contact us 1",
          path: "/contact/contact-1",
          type: "link",
        },
        {
          title: "Contact us 2",
          path: "/contact/contact-2",
          type: "link",
        },
        {
          title: "Contact us 3",
          path: "/contact/contact-3",
          type: "link",
        },
      ],
    },
  ];

  items = new BehaviorSubject<IMenu[]>(this.MENUITEMS);
}
