// ─── Central contact constants (single source of truth) ───
// Every page, schema, and component should import from here so the
// company name + WhatsApp number stay consistent everywhere (NAP SEO).

export const SITE_NAME = "HMZ Technology";
export const SITE_TAGLINE = "Production AI systems, not demos.";

export const WHATSAPP_NUMBER = "+96170106083"; // E.164 without spaces (schema/telephone)
export const WHATSAPP_DISPLAY = "+961 70 106 083"; // human-readable
export const WHATSAPP_LINK = "https://wa.me/96170106083";

export const EMAIL = "sales@hmz.technology";

export const FOUNDER_NAME = "Hasan El Zein";

export const SOCIAL = {
  linkedin: "https://www.linkedin.com/company/hmz-technology",
  twitter: "https://twitter.com/hmztechnology",
  instagram: "https://www.instagram.com/hmz.technology",
} as const;
