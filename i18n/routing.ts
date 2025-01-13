import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({
  locales: ['en', 'fr'],
 
  defaultLocale: 'en',
  pathnames: {
    "/about": {
      en: "/about",
      fr: "/a-propos"
    },
    "/contact": {
      en: "/contact",
      fr: "/contactez-moi"
    },
  }
});

export type Locale = (typeof routing.locales)[number];
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);