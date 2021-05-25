import { buildMessage, ValidateBy } from '../common/ValidateBy'
import { ValidationOptions } from '../ValidationOptions'

export const IS_NOT_EMPTY = 'isNotEmpty';

/**
 * Checks if given value is not empty (!== '', !== null, !== undefined).
 */
export function isNotEmpty(value: unknown): boolean {
  return value !== '' && value !== null && value !== undefined;
}

/**
 * Checks if given value is not empty (!== '', !== null, !== undefined).
 */
export function IsNotEmpty(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_NOT_EMPTY,
      validator: {
        validate: (value, args): boolean => isNotEmpty(value),
        defaultMessage: buildMessage(eachPrefix => eachPrefix + '$property não deve ser vazio', validationOptions),
      },
    },
    validationOptions
  );
}
