import Component from './component';

export enum ToastVariants {
    Success = 'success',
    Error = 'error',
    Info = 'information',
}


export interface Props {
    variant: ToastVariants,
    message: string,
    closeToast?: () => void;
}


Component.defaultProps = {
    variant: ToastVariants.Info,
};

export default Component;
