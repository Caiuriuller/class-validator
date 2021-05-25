import { buildMessage, ValidateBy } from '../common/ValidateBy'
import { ValidationOptions } from '../ValidationOptions'

export const IS_NOT_IN = 'isNotIn';

/**
 * Checks if given value not in a array of allowed values.
 */
export function isNotIn(value: unknown, possibleValues: readonly unknown[]): boolean {
  return !(possibleValues instanceof Array) || !possibleValues.some(possibleValue => possibleValue === value);
}

/**
 * Checks if given value not in a array of allowed values.
 */
export function IsNotIn(values: readonly any[], validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_NOT_IN,
      constraints: [values],
      validator: {
        validate: (value, args): boolean => isNotIn(value, args.constraints[0]),
        defaultMessage: buildMessage(
          eachPrefix => eachPrefix + '$property não pode ser um dos seguintes valores: $constraint1',
          validationOptions
        ),
      },
    },
    validationOptions
  );
}
