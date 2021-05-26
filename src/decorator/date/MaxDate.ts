import { buildMessage, ValidateBy } from '../common/ValidateBy'
import { ValidationOptions } from '../ValidationOptions'

export const MAX_DATE = 'maxDate';

/**
 * Checks if the value is a date that's before the specified date.
 */
export function maxDate(date: unknown, maxDate: Date): boolean {
  return date instanceof Date && date.getTime() <= maxDate.getTime();
}

/**
 * Checks if the value is a date that's after the specified date.
 */
export function MaxDate(date: Date, validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: MAX_DATE,
      constraints: [date],
      validator: {
        validate: (value, args): boolean => maxDate(value, args.constraints[0]),
        defaultMessage: buildMessage(
          eachPrefix => 'a data maxima permitida para ' + eachPrefix + '$property é $constraint1',
          validationOptions
        ),
      },
    },
    validationOptions
  );
}
