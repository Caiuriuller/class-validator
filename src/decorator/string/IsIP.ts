import isIPValidator from 'validator/lib/isIP'
import { buildMessage, ValidateBy } from '../common/ValidateBy'
import { ValidationOptions } from '../ValidationOptions'

export type IsIpVersion = '4' | '6' | 4 | 6;

export const IS_IP = 'isIp';

/**
 * Checks if the string is an IP (version 4 or 6).
 * If given value is not a string, then it returns false.
 */
export function isIP(value: unknown, version?: IsIpVersion): boolean {
  const versionStr = version ? (`${version}` as '4' | '6') : undefined;
  return typeof value === 'string' && isIPValidator(value, versionStr);
}

/**
 * Checks if the string is an IP (version 4 or 6).
 * If given value is not a string, then it returns false.
 */
export function IsIP(version?: IsIpVersion, validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_IP,
      constraints: [version],
      validator: {
        validate: (value, args): boolean => isIP(value, args.constraints[0]),
        defaultMessage: buildMessage(eachPrefix => eachPrefix + '$property deve ser um endereco de IP', validationOptions),
      },
    },
    validationOptions
  );
}
