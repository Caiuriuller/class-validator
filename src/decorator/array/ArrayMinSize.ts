import { buildMessage, ValidateBy } from '../common/ValidateBy'
import { ValidationOptions } from '../ValidationOptions'

export const ARRAY_MIN_SIZE = 'arrayMinSize';

/**
 * Checks if the array's length is greater than or equal to the specified number.
 * If null or undefined is given then this function returns false.
 */
export function arrayMinSize(array: unknown, min: number): boolean {
  return array instanceof Array && array.length >= min;
}

/**
 * Checks if the array's length is greater than or equal to the specified number.
 * If null or undefined is given then this function returns false.
 */
export function ArrayMinSize(min: number, validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: ARRAY_MIN_SIZE,
      constraints: [min],
      validator: {
        validate: (value, args): boolean => arrayMinSize(value, args.constraints[0]),
        defaultMessage: buildMessage(
          eachPrefix => eachPrefix + '$property deve conter ao menos $constraint1 elementos',
          validationOptions
        ),
      },
    },
    validationOptions
  );
}
