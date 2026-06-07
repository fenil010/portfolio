export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export const sectionContainer = "section-container";

export const sectionHeader =
  "mb-10 flex flex-col items-center text-center sm:mb-12 lg:mb-[60px]";

export const sectionEyebrow =
  "mb-2 text-[13px] font-semibold uppercase tracking-normal text-(--text-muted)";

export const sectionTitle =
  "text-[28px] font-extrabold leading-tight text-(--text-primary) sm:text-[32px] md:text-4xl";

export const sectionUnderline =
  "mt-3 h-1 w-10 rounded-sm bg-(--accent-primary)";

export const glassPanel =
  "border border-white/60 bg-[linear-gradient(135deg,rgba(255,255,255,0.75)_0%,rgba(255,255,255,0.4)_100%)] shadow-[0_10px_30px_rgba(0,0,0,0.03),inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-xl transition-all duration-300";
