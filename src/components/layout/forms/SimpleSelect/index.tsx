import Component from './component';
import { SelectTypes } from './types';


Component.defaultProps = {
    label: '',
    error: '',
    multiline: false,
    type: SelectTypes.Primary,
    hasSelectAllButton: false,
};

export default Component;
