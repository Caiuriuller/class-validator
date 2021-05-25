import isLengthValidator from 'validator/lib/isLength'
import { buildMessage, ValidateBy } from '../common/ValidateBy'
import { ValidationOptions } from '../ValidationOptions'

export const IS_LENGTH = 'isLength';

/**
 * Checks if the string's length falls in a range. Note: this function takes into account surrogate pairs.
 * If given value is not a string, then it returns false.
 */
export function length(value: unknown, min: number, max?: number): boolean {
  return typeof value === 'string' && isLengthValidator(value, { min, max });
}

/**
 * Checks if the string's length falls in a range. Note: this function takes into account surrogate pairs.
 * If given value is not a string, then it returns false.
 */
export function Length(min: number, max?: number, validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_LENGTH,
      constraints: [min, max],
      validator: {
        validate: (value, args): boolean => length(value, args.constraints[0], args.constraints[1]),
        defaultMessage: buildMessage((eachPrefix, args) => {
          const isMinLength = args.constraints[0] !== null && args.constraints[0] !== undefined;
          const isMaxLength = args.constraints[1] !== null && args.constraints[1] !== undefined;
          if (isMinLength && (!args.value || args.value.length < args.constraints[0])) {
            return eachPrefix + '$property deve ser maior ou igual que $constraint1 caracteres';
          } else if (isMaxLength && args.value.length > args.constraints[1]) {
            return eachPrefix + '$property deve ser menor ou igual a $constraint2 caracteres';
          }
          return (
            eachPrefix +
            '$property deve ser maior que ou igual a $constraint1 e menor que ou igual a $constraint2 caracteres'
          );
        }, validationOptions),
      },
    },
    validationOptions
  );
}
