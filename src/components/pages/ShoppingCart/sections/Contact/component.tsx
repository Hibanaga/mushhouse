import React, { FormEvent, FunctionComponent, useState } from 'react';
import * as Yup from 'yup';

import { YupValidateError } from 'types/yup';

import Button from 'components/layout/Button';
import Container from 'components/layout/Container';
import SimpleInput from 'components/layout/forms/SimpleInput';

import { Props } from './index';
import StyledComponent from './styles';


const defaultFormState = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email:'',
    country: '',
    homeNumber: '',
    apartamentNumber:'',
    city: '',
    street:'',
    postalCode: '',
};

const formStateValidationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    country: Yup.string().required('Country is required'),
    homeNumber: Yup.string().required('Home number is required'),
    apartamentNumber: Yup.string(),
    city: Yup.string().required('City is required'),
    street: Yup.string().required('Street is required'),
    postalCode: Yup.string()
        .required('Postal code is required')
        .matches(/^[0-9]{5}(?:-[0-9]{4})?$/, 'Invalid postal code format'),
});

const ShoppingCartSectionContact: FunctionComponent<Props> = ({ }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [formState, setFormState] = useState(defaultFormState);
    const [errors, setErrors] = useState<Record<string, string>>({});

    console.log('formState: ', formState);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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

            setIsLoading(false);
            setErrors(errors);
        }
    };

    return (
        <StyledComponent className="shopping-cart-section-contact">
            <h2 className="section-headline">Adres dostawy</h2>
            <Container className="layout-layout-container" >
                <h3 className="section-headline">Dane kontaktowe</h3>
                <Container className="inner-actions">
                    <SimpleInput
                        placeholder="Imię"
                        value={formState.firstName}
                        error={errors?.firstName}
                        onChange={(e) => setFormState({ ...formState, firstName: e.target.value })}
                    />
                    <SimpleInput
                        placeholder="Nazwisko"
                        value={formState.lastName}
                        error={errors?.lastName}
                        onChange={(e) => setFormState({ ...formState, lastName: e.target.value })}
                    />
                    <SimpleInput
                        placeholder="Numer. tel."
                        value={formState.phoneNumber}
                        error={errors?.phoneNumber}
                        onChange={(e) => setFormState({ ...formState, phoneNumber: e.target.value })}
                    />
                    <SimpleInput
                        placeholder="Email"
                        value={formState.email}
                        error={errors?.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    />
                </Container>
            </Container>

            <Container className="layout-layout-container" >
                <h3 className="section-headline">Adres</h3>
                <Container className="inner-actions">
                    <SimpleInput
                        placeholder="Kraj"
                        value={formState.country}
                        error={errors?.country}
                        onChange={(e) => setFormState({ ...formState, country: e.target.value })}
                    />
                    <SimpleInput
                        placeholder="Numer domu"
                        value={formState.homeNumber}
                        error={errors?.homeNumber}
                        onChange={(e) => setFormState({ ...formState, homeNumber: e.target.value })}
                    />
                    <SimpleInput
                        placeholder="Miasto"
                        value={formState.city}
                        error={errors?.city}
                        onChange={(e) => setFormState({ ...formState, city: e.target.value })}
                    />
                    <SimpleInput
                        placeholder="Numer mieszkania"
                        value={formState.apartamentNumber}
                        error={errors?.apartamentNumber}
                        onChange={(e) => setFormState({ ...formState, apartamentNumber: e.target.value })}
                    />
                    <SimpleInput
                        placeholder="Ulica"
                        value={formState.street}
                        error={errors?.street}
                        onChange={(e) => setFormState({ ...formState, street: e.target.value })}
                    />
                    <SimpleInput
                        placeholder="Kod pocztowy"
                        value={formState.postalCode}
                        error={errors?.postalCode}
                        onChange={(e) => setFormState({ ...formState, postalCode: e.target.value })}
                    />
                </Container>
            </Container>

            <Container className="inner-actions">
                <Button
                    className="button-add-to-cart"
                    onClick={handleSubmit}
                >
                  Złoż zamówinie
                </Button>
            </Container>
        </StyledComponent>
    );
};

export default ShoppingCartSectionContact;
