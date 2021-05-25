import { buildMessage, ValidateBy } from '../common/ValidateBy'
import { ValidationOptions } from '../ValidationOptions'

export const ARRAY_MAX_SIZE = 'arrayMaxSize';

/**
 * Checks if the array's length is less or equal to the specified number.
 * If null or undefined is given then this function returns false.
 */
export function arrayMaxSize(array: unknown, max: number): boolean {
  return array instanceof Array && array.length <= max;
}

/**
 * Checks if the array's length is less or equal to the specified number.
 * If null or undefined is given then this function returns false.
 */
export function ArrayMaxSize(max: number, validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: ARRAY_MAX_SIZE,
      constraints: [max],
      validator: {
        validate: (value, args): boolean => arrayMaxSize(value, args.constraints[0]),
        defaultMessage: buildMessage(
          eachPrefix => eachPrefix + '$property não deve conter mais que $constraint1 elementos',
          validationOptions
        ),
      },
    },
    validationOptions
  );
}
