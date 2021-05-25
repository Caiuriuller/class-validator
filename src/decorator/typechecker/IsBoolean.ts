import { buildMessage, ValidateBy } from '../common/ValidateBy'
import { ValidationOptions } from '../ValidationOptions'

export const IS_BOOLEAN = 'isBoolean';

/**
 * Checks if a given value is a boolean.
 */
export function isBoolean(value: unknown): boolean {
  return value instanceof Boolean || typeof value === 'boolean';
}

/**
 * Checks if a value is a boolean.
 */
export function IsBoolean(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_BOOLEAN,
      validator: {
        validate: (value, args): boolean => isBoolean(value),
        defaultMessage: buildMessage(eachPrefix => eachPrefix + '$property deve ser um valor booleano', validationOptions),
      },
    },
    validationOptions
  );
}
