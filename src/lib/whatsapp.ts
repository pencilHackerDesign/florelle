// Single source of truth for WhatsApp links. Do not duplicate the phone
// number or wa.me URL anywhere else in the codebase.

export const PHONE = '917767058698';

export function inquireUrl(message: string): string {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}

export function productInquireMessage(productTitle: string): string {
  return `Hi Florelle, I'd like to inquire about the ${productTitle}.`;
}

export const GENERIC_INQUIRE_MESSAGE = "Hi Florelle, I'd like to inquire.";
