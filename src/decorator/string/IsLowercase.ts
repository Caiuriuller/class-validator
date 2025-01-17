import isLowercaseValidator from 'validator/lib/isLowercase'
import { buildMessage, ValidateBy } from '../common/ValidateBy'
import { ValidationOptions } from '../ValidationOptions'

export const IS_LOWERCASE = 'isLowercase';

/**
 * Checks if the string is lowercase.
 * If given value is not a string, then it returns false.
 */
export function isLowercase(value: unknown): boolean {
  return typeof value === 'string' && isLowercaseValidator(value);
}

/**
 * Checks if the string is lowercase.
 * If given value is not a string, then it returns false.
 */
export function IsLowercase(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_LOWERCASE,
      validator: {
        validate: (value, args): boolean => isLowercase(value),
        defaultMessage: buildMessage(
          eachPrefix => eachPrefix + '$property deve ser uma string de letras minusculas',
          validationOptions
        ),
      },
    },
    validationOptions
  );
}
