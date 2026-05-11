import { MessageCircle } from "lucide-react";

import { contact } from "@/data/site";
import { Locale } from "@/lib/i18n";

export function WhatsAppButton({ locale }: { locale: Locale }) {
  return (
    <a
      href={contact.whatsapp}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-lagoon to-deepbrand text-white shadow-glow transition hover:-translate-y-1 ltr:right-5 rtl:left-5"
      aria-label={locale === "ar" ? "تواصل عبر واتساب" : "Contact via WhatsApp"}
    >
      <MessageCircle size={25} />
    </a>
  );
}
