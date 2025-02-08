"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Locale, routing } from "@/i18n/routing";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({ defaultValue, label }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(nextLocale: string) {
    // Get the current path segments
    const segments = pathname.split('/');
    
    // Remove the current locale if it exists
    if (routing.locales.includes(segments[1] as Locale)) {
      segments.splice(1, 1);
    }
    
    // Insert the new locale after the first slash
    segments.splice(1, 0, nextLocale);
    
    // Construct the new path
    const newPath = segments.join('/');
    
    // Use push instead of replace to ensure proper navigation
    router.push(newPath);
  }

  return (
    <Select defaultValue={defaultValue} onValueChange={onSelectChange}>
      <SelectTrigger
        className="w-[70px] h-8 border-none bg-transparent focus:ring-0 focus:ring-offset-0"
        aria-label={label}
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {routing.locales.map((locale) => (
          <SelectItem key={locale} value={locale}>
            {locale.toUpperCase()}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}