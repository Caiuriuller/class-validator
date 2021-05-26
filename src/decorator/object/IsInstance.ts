import { buildMessage, ValidateBy } from '../common/ValidateBy'
import { ValidationOptions } from '../ValidationOptions'

export const IS_INSTANCE = 'isInstance';

/**
 * Checks if the value is an instance of the specified object.
 */
export function isInstance(object: unknown, targetTypeConstructor: new (...args: any[]) => any): boolean {
  return (
    targetTypeConstructor && typeof targetTypeConstructor === 'function' && object instanceof targetTypeConstructor
  );
}

/**
 * Checks if the value is an instance of the specified object.
 */
export function IsInstance(
  targetType: new (...args: any[]) => any,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_INSTANCE,
      constraints: [targetType],
      validator: {
        validate: (value, args): boolean => isInstance(value, args.constraints[0]),
        defaultMessage: buildMessage((eachPrefix, args) => {
          if (args.constraints[0]) {
            return eachPrefix + `$property deve ser uma instancia de ${args.constraints[0].name as string}`;
          } else {
            return eachPrefix + `${IS_INSTANCE} o decorator espera um objeto como valor.`;
          }
        }, validationOptions),
      },
    },
    validationOptions
  );
}
