import isIBANValidator from 'validator/lib/isIBAN'
import { buildMessage, ValidateBy } from '../common/ValidateBy'
import { ValidationOptions } from '../ValidationOptions'

export const IS_IBAN = 'isIBAN';

/**
 * Check if a string is a IBAN (International Bank Account Number).
 * If given value is not a string, then it returns false.
 */
export function isIBAN(value: unknown): boolean {
  return typeof value === 'string' && isIBANValidator(value);
}

/**
 * Check if a string is a IBAN (International Bank Account Number).
 * If given value is not a string, then it returns false.
 */
export function IsIBAN(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_IBAN,
      validator: {
        validate: (value, args): boolean => isIBAN(value),
        defaultMessage: buildMessage(eachPrefix => eachPrefix + '$property deve ser um IBAN', validationOptions),
      },
    },
    validationOptions
  );
}
