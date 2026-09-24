export const QUOTE_FIELD_LIMITS = {
  name: { min: 2, max: 80 },
  phone: { min: 8, max: 20 },
  email: { max: 120 },
  message: { min: 10, max: 1200 },
} as const;

export type QuoteFormValues = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  hasAcceptedPrivacy: boolean;
};

export type QuoteFieldName = keyof QuoteFormValues;

export type QuoteErrorCode =
  'required' | 'tooShort' | 'tooLong' | 'invalidPhone' | 'invalidEmail' | 'privacyRequired';

export type QuoteErrors = Partial<Record<QuoteFieldName, QuoteErrorCode>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^\+?[\d\s()-]+$/;

function checkLength(value: string, min: number, max: number): QuoteErrorCode | undefined {
  if (value.length === 0) return 'required';
  if (value.length < min) return 'tooShort';
  if (value.length > max) return 'tooLong';
  return undefined;
}

export function validateQuote(values: QuoteFormValues): QuoteErrors {
  const errors: QuoteErrors = {};
  const name = values.name.trim();
  const phone = values.phone.trim();
  const email = values.email.trim();
  const message = values.message.trim();
  const limits = QUOTE_FIELD_LIMITS;

  const nameError = checkLength(name, limits.name.min, limits.name.max);
  if (nameError) errors.name = nameError;

  const phoneDigits = phone.replace(/\D/g, '');
  if (phone.length === 0) errors.phone = 'required';
  else if (
    !PHONE_PATTERN.test(phone) ||
    phoneDigits.length < limits.phone.min ||
    phone.length > limits.phone.max
  )
    errors.phone = 'invalidPhone';

  if (email.length > limits.email.max) errors.email = 'tooLong';
  else if (email.length > 0 && !EMAIL_PATTERN.test(email)) errors.email = 'invalidEmail';

  if (values.service.trim().length === 0) errors.service = 'required';

  const messageError = checkLength(message, limits.message.min, limits.message.max);
  if (messageError) errors.message = messageError;

  if (!values.hasAcceptedPrivacy) errors.hasAcceptedPrivacy = 'privacyRequired';

  return errors;
}

export function hasErrors(errors: QuoteErrors): boolean {
  return Object.keys(errors).length > 0;
}
