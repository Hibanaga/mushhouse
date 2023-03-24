import React, { FormEvent, FunctionComponent, useState } from 'react';
import * as Yup from 'yup';

import { YupValidateError } from 'types/yup';

import constants from 'utils/constants';

import Button from 'components/layout/Button';
import { ButtonTypes } from 'components/layout/Button/types';
import SimpleInput from 'components/layout/forms/SimpleInput';

import StyledComponent from './styles';
import { Props } from './types';

const defaultFormState = {
    firstName: '',
    lastName: '',
    address: '',
    phoneNumber: '',
    promoCode: '',
};

const formStateValidationSchema = Yup.object().shape({
    firstName: Yup.string()
        .required('Fist Name is required'),
    lastName: Yup.string()
        .required('Last Name is required'),
    address: Yup.string()
        .required('Fist Name is required'),
    phoneNumber: Yup.string().matches(constants.phoneValidation, 'Phone number is not valid'),
    promoCode: Yup.string(),
});

const ModuleMakeOrderForm: FunctionComponent<Props> = ({ totalPrice }) => {
    const [formState, setFormState] = useState({
        ...defaultFormState,
    });
    const [errors, setErrors] = useState<{[key:string]: string}>({});
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrors({});
        setIsLoading(true);

        try {
            formStateValidationSchema.validateSync(formState, { abortEarly: false });
        } catch (error: any) {
            const yupError: YupValidateError = error;
            const errors: Record<string, string> = {};

            yupError.inner.forEach(innerError => {
                errors[innerError.path] = innerError.message;
            });

            setErrors(errors);
            return;
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <StyledComponent className="module-make-order-form">
            <form
                className="form"
                onSubmit={handleSubmit}
            >
                <div className="inner-fullname">
                    <SimpleInput
                        name="firstName"
                        className="input-first-name"
                        placeholder="Имя"
                        onChange={(e) => setFormState(prevFormState => ({ ...prevFormState, firstName: e.target.value }))}
                        value={formState.firstName}
                        error={errors?.firstName}
                    />
                    <SimpleInput
                        name="lastName"
                        placeholder="Фамилия"
                        className="input-last-name"
                        onChange={(e) => setFormState(prevFormState => ({ ...prevFormState, lastName: e.target.value }))}
                        value={formState.lastName}
                        error={errors?.lastName}
                    />
                </div>
                <SimpleInput
                    name="phone"
                    className="input-phone"
                    placeholder="Номер телефона"
                    onChange={(e) => setFormState(prevFormState => ({ ...prevFormState, phoneNumber: e.target.value }))}
                    value={formState.phoneNumber}
                    error={errors?.phoneNumber}
                />

                <SimpleInput
                    name="address"
                    className="input-address"
                    label="Адресс"
                    placeholder="107031, г. Москва, ул. Большая Лубянка, 2, кв. 1"
                    onChange={(e) => setFormState(prevFormState => ({ ...prevFormState, address: e.target.value }))}
                    value={formState.address}
                    error={errors?.address}
                />

                <SimpleInput
                    name="promocode"
                    className="input-promocode"
                    label="Промокод"
                    onChange={(e) => setFormState(prevFormState => ({ ...prevFormState, lastName: e.target.value }))}
                    value={formState.lastName}
                    error={errors?.lastName}
                />

                <div className="inner-totalsum">
                    <div className="inner-total-form">
                        <span className="data-name">Сумма:{' '}</span>
                        <span className="data-value">{totalPrice}</span>
                    </div>

                    <div className="inner-total-form">
                        <span className="data-name">Итоговая сумма:{' '}</span>
                        <span className="data-value">{totalPrice}</span>
                    </div>
                </div>


                <Button
                    type={ButtonTypes.Submit}
                    className="button-submit-form"
                >
                    Я оплатил
                </Button>
            </form>
        </StyledComponent>
    );
};

export default ModuleMakeOrderForm;
