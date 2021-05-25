import isLengthValidator from 'validator/lib/isLength'
import { buildMessage, ValidateBy } from '../common/ValidateBy'
import { ValidationOptions } from '../ValidationOptions'

export const MIN_LENGTH = 'minLength';

/**
 * Checks if the string's length is not less than given number. Note: this function takes into account surrogate pairs.
 * If given value is not a string, then it returns false.
 */
export function minLength(value: unknown, min: number): boolean {
  return typeof value === 'string' && isLengthValidator(value, { min });
}

/**
 * Checks if the string's length is not less than given number. Note: this function takes into account surrogate pairs.
 * If given value is not a string, then it returns false.
 */
export function MinLength(min: number, validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: MIN_LENGTH,
      constraints: [min],
      validator: {
        validate: (value, args): boolean => minLength(value, args.constraints[0]),
        defaultMessage: buildMessage(
          eachPrefix => eachPrefix + '$property deve ser maior ou igual a $constraint1 caracteres',
          validationOptions
        ),
      },
    },
    validationOptions
  );
}
