import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({
  locales: ['en', 'fr'],
  defaultLocale: 'fr',
  pathnames: {
    '/': '/',
    '/about': {
        en: '/about',
        fr: "/a-propos",
    },
    '/contact': {
        en: '/contact',
        fr: "/contactez-nous",
    }
  },
  localePrefix: "as-needed"
});

export type Locale = (typeof routing.locales)[number];
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);