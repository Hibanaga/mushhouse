import { MultiValue, SingleValue } from 'react-select';

import { Option } from 'types/options';

export interface Props {
  error?: string;
  multiline?: boolean;
  hasClearButton?: boolean;
  options: Option<string>[];
  className?: string;
  classNamePrefix?: string;
  placeholder?: string;
  onChange?: (newValue: SingleValue<Option<string>> | MultiValue<Option<string>> ) => void;
}
