import { buildMessage, ValidateBy } from '../common/ValidateBy'
import { ValidationOptions } from '../ValidationOptions'

export const IS_INT = 'isInt';

/**
 * Checks if value is an integer.
 */
export function isInt(val: unknown): boolean {
  return typeof val === 'number' && Number.isInteger(val);
}

/**
 * Checks if value is an integer.
 */
export function IsInt(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_INT,
      validator: {
        validate: (value, args): boolean => isInt(value),
        defaultMessage: buildMessage(
          eachPrefix => eachPrefix + '$property deve ser um inteiro',
          validationOptions
        ),
      },
    },
    validationOptions
  );
}
