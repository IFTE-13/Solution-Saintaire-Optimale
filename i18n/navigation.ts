import {
    createLocalizedPathnamesNavigation,
    Pathnames
  } from 'next-intl/navigation';
   
  export const locales = ['en', 'fr'] as const;

  export const pathnames = {
    '/': '/',
    '/about': {
        en: '/about',
        fr: "/a-propos",
    },
    '/contact': {
        en: '/contact',
        fr: "/contactez-nous",
    }
  } satisfies Pathnames<typeof locales>;
   
  export const {Link, redirect, usePathname, useRouter} =
    createLocalizedPathnamesNavigation({locales, pathnames});