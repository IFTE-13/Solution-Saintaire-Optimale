import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {Locale, routing} from '@/i18n/routing';
import "./globals.css";
import { ThemeProvider } from '@/providers/theme-provider';
import Navbar from '@/components/shared/Navbar';
import { Metadata } from 'next';
import { twMerge } from 'tailwind-merge';
import { Poppins } from "next/font/google";
import Footer from '@/components/shared/Footer';
import { ReactLenis } from "@/providers/lenis-provider"

export const metadata: Metadata = {
  title: "Solution Saintaire Optimale",
  description: "Create by ColdLabs",
};

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });
 
export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }
 
  const messages = await getMessages();
 
  return (
    <html lang={locale} suppressHydrationWarning>
      <ReactLenis root>
      <body className={twMerge(poppins.className, "antialiased")}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <NextIntlClientProvider messages={messages} locale={locale}>
            <Navbar />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
      </ReactLenis>
    </html>
  );
}