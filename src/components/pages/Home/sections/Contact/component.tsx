import React, { FormEvent, FunctionComponent, useState } from 'react';
import * as Yup from 'yup';

import { YupValidateError } from 'types/yup';

import constants from 'utils/constants';

import Button from 'components/layout/Button';
import SimpleInput from 'components/layout/forms/SimpleInput';

import { ButtonTypes } from '../../../../layout/Button/types';

import StyledComponent from './styles';
import { Props } from './types';

const defaultFormState = {
    fullName: '',
    phoneNumber: '',
};

const formStateValidationSchema = Yup.object().shape({
    fullName: Yup.string()
        .required('Full Name is required'),
    phoneNumber: Yup.string().matches(constants.phoneValidation, 'Phone number is not valid'),
});

const HomeSectionContact: FunctionComponent<Props> = ({  }) => {
    const [formState, setFormState] = useState<{fullName: string, phoneNumber: string}>({
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
        <StyledComponent
            id="id_contact"
            className="home-section-contact"
        >
            <div className="inner">
                <h3 className="headline">Контакты</h3>
                <span className="subheadline">У вас остались вопросы? Свяжитесь с нами!</span>
                <form
                    className="inner-action"
                    onSubmit={handleSubmit}
                >
                    <SimpleInput
                        name="fullName"
                        className="input-name"
                        placeholder="Ваше имя"
                        onChange={(e) => setFormState(prevFormState => ({ ...prevFormState, fullName: e.target.value }))}
                        value={formState.fullName}
                        error={errors?.fullName}
                    />
                    <SimpleInput
                        name="phoneNumber"
                        className="input-phone"
                        placeholder="Номер телефона"
                        onChange={(e) => setFormState(prevFormState => ({ ...prevFormState, phoneNumber: e.target.value }))}
                        value={formState.phoneNumber}
                        error={errors?.phoneNumber}
                    />
                    <Button
                        type={ButtonTypes.Submit}
                        className="button-send-contact"
                        loading={isLoading}
                    >Оставить заявку</Button>
                </form>
            </div>
        </StyledComponent>
    );
};

export default HomeSectionContact;
