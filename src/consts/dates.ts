import { Option } from 'types/options';

export const DATE_DEFAULT_TIMEZONE = 'Europe/Warsaw';

export const DATE_API_FORMAT = 'YYYY-MM-DD';
export const DATE_DEFAULT_FORMAT = 'DD.MM.YYYY';
export const DATE_UNICODE_FORMAT = 'dd.MM.yyyy';

export const DATE_YEARLY_API_FORMAT = 'MM-DD';
export const DATE_YEARLY_DEFAULT_FORMAT = 'DD.MM';
export const DATE_YEARLY_UNICODE_FORMAT = 'dd.MM';

export const DATETIME_API_FORMAT = 'YYYY-MM-DD HH:mm';
export const DATETIME_DEFAULT_FORMAT = 'DD.MM.YYYY HH:mm';
export const DATETIME_UNICODE_FORMAT = 'dd.MM.yyyy HH:mm';

export const TIME_API_FORMAT = 'HH:mm';
export const TIME_DEFAULT_FORMAT = 'HH:mm';
export const TIME_UNICODE_FORMAT = 'HH:mm';

export const TIME_ZONES: Option<number>[] = [
    { label: 'GMT 0h (Greenwich Mean Time)', value: 0 },
    { label: 'GMT +1h (European Central Time)', value: 1 },
    { label: 'GMT +2h (Eastern European Time)', value: 2 },
    { label: 'GMT +2h (Egypt Standard Time)', value: 2 },
    { label: 'GMT +3h (Eastern African Time)', value: 3 },
    { label: 'GMT +3.5h (Middle East Time)', value: 3.5 },
    { label: 'GMT +4h (Near East Time)', value: 4 },
    { label: 'GMT +5h (Pakistan Lahore Time)', value: 5 },
    { label: 'GMT +5.5h (India Standard Time)', value: 5.5 },
    { label: 'GMT +6h (Bangladesh Standard Time)', value: 6 },
    { label: 'GMT +7h (Vietnam Standard Time)', value: 7 },
    { label: 'GMT +8h (China Taiwan Time)', value: 8 },
    { label: 'GMT +9h (Japan Standard Time)', value: 9 },
    { label: 'GMT +9.5h (Australia Central Time)', value: 9.5 },
    { label: 'GMT +10h (Australia Eastern Time)', value: 10 },
    { label: 'GMT +11h (Solomon Standard Time)', value: 11 },
    { label: 'GMT +12h (New Zealand Standard Time)', value: 12 },
    { label: 'GMT -11h (Midway Islands Time)', value: -11 },
    { label: 'GMT -10h (Hawaii Standard Time)', value: -10 },
    { label: 'GMT -9h (Alaska Standard Time)', value: -9 },
    { label: 'GMT -8h (Pacific Standard Time)', value: -8 },
    { label: 'GMT -7h (Phoenix Standard Time)', value: -7 },
    { label: 'GMT -7h (Mountain Standard Time)', value: -7 },
    { label: 'GMT -6h (Central Standard Time)', value: -6 },
    { label: 'GMT -5h (Eastern Standard Time)', value: -5 },
    { label: 'GMT -5h (Indiana Eastern Standard Time)', value: -5 },
    { label: 'GMT -4h (Puerto Rico and US Virgin Islands Time)', value: -4 },
    { label: 'GMT -3.5h (Canada Newfoundland Time)', value: -3.5 },
    { label: 'GMT -3h (Argentina Standard Time)', value: -3 },
    { label: 'GMT -3h (Brazil Eastern Time)', value: -3 },
    { label: 'GMT -1h (Central African Time)', value: -1 },
];