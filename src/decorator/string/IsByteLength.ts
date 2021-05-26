import isByteLengthValidator from 'validator/lib/isByteLength'
import { buildMessage, ValidateBy } from '../common/ValidateBy'
import { ValidationOptions } from '../ValidationOptions'

export const IS_BYTE_LENGTH = 'isByteLength';

/**
 * Checks if the string's length (in bytes) falls in a range.
 * If given value is not a string, then it returns false.
 */
export function isByteLength(value: unknown, min: number, max?: number): boolean {
  return typeof value === 'string' && isByteLengthValidator(value, { min, max });
}

/**
 * Checks if the string's length (in bytes) falls in a range.
 * If given value is not a string, then it returns false.
 */
export function IsByteLength(min: number, max?: number, validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_BYTE_LENGTH,
      constraints: [min, max],
      validator: {
        validate: (value, args): boolean => isByteLength(value, args.constraints[0], args.constraints[1]),
        defaultMessage: buildMessage(
          eachPrefix => eachPrefix + "$property' o tamanho dos bytes devem estar entre  ($constraint1, $constraint2)",
          validationOptions
        ),
      },
    },
    validationOptions
  );
}
