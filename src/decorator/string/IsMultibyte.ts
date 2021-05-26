import isMultibyteValidator from 'validator/lib/isMultibyte'
import { buildMessage, ValidateBy } from '../common/ValidateBy'
import { ValidationOptions } from '../ValidationOptions'

export const IS_MULTIBYTE = 'isMultibyte';

/**
 * Checks if the string contains one or more multibyte chars.
 * If given value is not a string, then it returns false.
 */
export function isMultibyte(value: unknown): boolean {
  return typeof value === 'string' && isMultibyteValidator(value);
}

/**
 * Checks if the string contains one or more multibyte chars.
 * If given value is not a string, then it returns false.
 */
export function IsMultibyte(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_MULTIBYTE,
      validator: {
        validate: (value, args): boolean => isMultibyte(value),
        defaultMessage: buildMessage(
          eachPrefix => eachPrefix + '$property deve conter um ou mais caracteres de multibyte ',
          validationOptions
        ),
      },
    },
    validationOptions
  );
}
