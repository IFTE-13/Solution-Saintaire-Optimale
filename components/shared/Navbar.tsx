"use client";
import React from "react";
import { AlignRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import ToggleTheme from "@/components/toogle-theme";
import Image from "next/image";
import LocaleSwitcher from "@/components/Locale/LocaleSwitcher";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const Navbar = () => {
  const t = useTranslations("NavItems");
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { href: "/" as const, label: t("home.lable") },
    { href: "/about" as const, label: t("about.lable") },
    { href: "/contact" as const, label: t("contact.lable") },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-32 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/logo.png" 
              alt="Logo" 
              height={100} 
              width={100} 
              className="cursor-pointer block dark:hidden"
            />
            <Image 
              src="/logo-white.png" 
              alt="Logo" 
              height={100} 
              width={100} 
              className="cursor-pointer hidden dark:block"
            />
            <span className="hidden lg:block text-xl font-semibold">
              {t("companyName")}
            </span>
          </Link>

          <div className="flex items-center space-x-2">
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
                >
                  {label}
                </Link>
              ))}
            </nav>

            <ToggleTheme />
            <LocaleSwitcher />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <AlignRight className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="flex flex-col items-center space-y-4 pt-6">
                    <Image 
                      src="/logo.png" 
                      alt="Logo" 
                      height={60} 
                      width={60} 
                      className="cursor-pointer"
                    />
                    <span className="font-semibold">
                      {t("companyName")}
                    </span>
                  </SheetTitle>
                </SheetHeader>
                <nav className="mt-8 flex flex-col space-y-4">
                  {navItems.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center py-2 text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
                    >
                      {label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;