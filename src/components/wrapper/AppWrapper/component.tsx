import React, { FunctionComponent } from 'react';
import { Theme, ToastContainer, ToastPosition } from 'react-toastify';

import StyledComponent from './styles';
import { Props } from './types';

import 'react-toastify/dist/ReactToastify.css';
import 'react-datepicker/dist/react-datepicker.css';

const toastConfig = {
    position: 'top-center' as ToastPosition,
    autoClose: 8000,
    closeOnClick: false,
    hideProgressBar: true,
    pauseOnHover: true,
    closeButton: false,
    theme: 'light' as Theme,
};

const AppWrapper: FunctionComponent<Props> = ({ children }) => {
    return (
        <StyledComponent className="wrapper-app">
            {children}
            <ToastContainer {...toastConfig} />
        </StyledComponent>
    );
};

export default AppWrapper;
