/** Builds a click-to-chat link. `phone` must be in international format, digits only. */
export function whatsappUrl(phone: string, message?: string): string {
  const digits = phone.replace(/\D/g, '');
  const query = message ? `?text=${encodeURIComponent(message)}` : '';
  return `https://wa.me/${digits}${query}`;
}
