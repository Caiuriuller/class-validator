import ValidatorJS from 'validator'
import { buildMessage, ValidateBy } from '../common/ValidateBy'
import { ValidationOptions } from '../ValidationOptions'
import { isISO8601 } from './IsISO8601'

export const IS_DATE_STRING = 'isDateString';

/**
 * Alias for IsISO8601 validator
 */
export function isDateString(value: unknown, options?: ValidatorJS.IsISO8601Options): boolean {
  return isISO8601(value, options);
}

/**
 * Alias for IsISO8601 validator
 */
export function IsDateString(
  options?: ValidatorJS.IsISO8601Options,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_DATE_STRING,
      constraints: [options],
      validator: {
        validate: (value, args): boolean => isDateString(value),
        defaultMessage: buildMessage(
          eachPrefix => eachPrefix + '$property deve ser um valor ISO 8601 date string ',
          validationOptions
        ),
      },
    },
    validationOptions
  );
}
