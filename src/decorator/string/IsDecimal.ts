import ValidatorJS from 'validator'
import isDecimalValidator from 'validator/lib/isDecimal'
import { buildMessage, ValidateBy } from '../common/ValidateBy'
import { ValidationOptions } from '../ValidationOptions'

export const IS_DECIMAL = 'isDecimal';

/**
 * Checks if the string is a valid decimal.
 * If given value is not a string, then it returns false.
 */
export function isDecimal(value: unknown, options?: ValidatorJS.IsDecimalOptions): boolean {
  return typeof value === 'string' && isDecimalValidator(value, options);
}

/**
 * Checks if the string contains only letters and numbers.
 * If given value is not a string, then it returns false.
 */
export function IsDecimal(
  options?: ValidatorJS.IsDecimalOptions,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_DECIMAL,
      constraints: [options],
      validator: {
        validate: (value, args): boolean => isDecimal(value, args.constraints[0]),
        defaultMessage: buildMessage(
          eachPrefix => eachPrefix + '$property não é um valor decimal numerico valido',
          validationOptions
        ),
      },
    },
    validationOptions
  );
}
