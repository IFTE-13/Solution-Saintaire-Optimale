import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import { useTranslations } from "next-intl";

const ReviewCard = ({
  description,
}: {
  description: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-96 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <blockquote className="mt-2 text-sm">{description}</blockquote>
    </figure>
  );
};

export function Reviews() {
  const t = useTranslations('HomePage');
  const reviews = [
    { description: t("reviewDescription.des1")},
    { description: t("reviewDescription.des2")},
    { description: t("reviewDescription.des3")},
    { description: t("reviewDescription.des4")},
    { description: t("reviewDescription.des5")}
      
  ];
  const firstRow = reviews.slice(0, reviews.length / 2);
  return (
    <div className="relative flex h-[200px] w-full flex-col items-center justify-center overflow-hidden bg-[#EAEEFE] dark:bg-transparent">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review, idx) => (
          <ReviewCard key={idx} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#EAEEFE] dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#EAEEFE] dark:from-background"></div>
    </div>
  );
}
