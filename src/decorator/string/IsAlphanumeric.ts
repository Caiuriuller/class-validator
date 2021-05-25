import ValidatorJS from 'validator'
import isAlphanumericValidator from 'validator/lib/isAlphanumeric'
import { buildMessage, ValidateBy } from '../common/ValidateBy'
import { ValidationOptions } from '../ValidationOptions'

export const IS_ALPHANUMERIC = 'isAlphanumeric';

/**
 * Checks if the string contains only letters and numbers.
 * If given value is not a string, then it returns false.
 */
export function isAlphanumeric(value: unknown, locale?: ValidatorJS.AlphanumericLocale): boolean {
  return typeof value === 'string' && isAlphanumericValidator(value, locale);
}

/**
 * Checks if the string contains only letters and numbers.
 * If given value is not a string, then it returns false.
 */
export function IsAlphanumeric(locale?: string, validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_ALPHANUMERIC,
      constraints: [locale],
      validator: {
        validate: (value, args): boolean => isAlphanumeric(value, args.constraints[0]),
        defaultMessage: buildMessage(
          eachPrefix => eachPrefix + '$property deve conter somente letras e numeros',
          validationOptions
        ),
      },
    },
    validationOptions
  );
}
