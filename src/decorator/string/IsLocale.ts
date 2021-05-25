import isLocaleValidator from 'validator/lib/isLocale'
import { buildMessage, ValidateBy } from '../common/ValidateBy'
import { ValidationOptions } from '../ValidationOptions'

export const IS_LOCALE = 'isLocale';

/**
 * Check if the string is a locale.
 * If given value is not a string, then it returns false.
 */
export function isLocale(value: unknown): boolean {
  return typeof value === 'string' && isLocaleValidator(value);
}

/**
 * Check if the string is a locale.
 * If given value is not a string, then it returns false.
 */
export function IsLocale(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_LOCALE,
      validator: {
        validate: (value, args): boolean => isLocale(value),
        defaultMessage: buildMessage(eachPrefix => eachPrefix + '$property deve ser uma localidade', validationOptions),
      },
    },
    validationOptions
  );
}
