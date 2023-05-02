import React, { FunctionComponent, useState } from 'react';
import { toast } from 'react-toastify';
import { useAppContext } from 'context/AppContext';
import * as Yup from 'yup';

import { Option } from 'types/options';
import { YupValidateError } from 'types/yup';

import { makeOrder, MakeOrderParams } from 'requests/order';

import Button from 'components/layout/Button';
import Container from 'components/layout/Container';
import SimpleInput from 'components/layout/forms/SimpleInput';
import SimpleSelect from 'components/layout/forms/SimpleSelect';
import SimpleTextArea from 'components/layout/forms/SimpleTextArea';
import Toast from 'components/layout/Toast';
import { ToastVariants } from 'components/layout/Toast/types';

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
    delivery: { label: '', value: '' },
    city: '',
    street:'',
    postalCode: '',
    commentary: '',
};

const formStateValidationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    phoneNumber: Yup
        .string()
        .matches(/^[0-9]{9}$/, 'Invalid phone number format')
        .required('Phone number is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    country: Yup.string().required('Country is required'),
    homeNumber: Yup.string().required('Home number is required'),
    apartamentNumber: Yup.string(),
    delivery: Yup.object().shape({
        value: Yup.string().required('Delivery is required'),
    }),
    commentary: Yup.string(),
    city: Yup.string().required('City is required'),
    street: Yup.string().required('Street is required'),
    postalCode: Yup.string()
        .required('Postal code is required')
        .matches(/^\d{2}-\d{3}$/, 'Invalid postal code format'),
});

const ShoppingCartSectionContact: FunctionComponent<Props> = ({ delivery }) => {
    const { shoppingCart } = useAppContext();

    const [isLoading, setIsLoading] = useState(false);
    const [formState, setFormState] = useState(defaultFormState);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleSubmit = async () => {
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
            return null;
        }

        const requestData: MakeOrderParams = {
            email: formState.email,
            cart: {
                products: shoppingCart ? shoppingCart?.map((element) => ({ id: element.id, quantity: element.quantity || 1 })) : [],
                discount: 0,

            },
            address: {
                phone: formState.phoneNumber,
                country: formState.country,
                city: formState.city,
                address1: `${formState.street} ${formState.apartamentNumber || ''}`,
                first_name: formState.firstName,
                last_name: formState.lastName,
                postal_code: formState.postalCode,
            },
            delivery: {
                id: delivery.find((element) =>  element.id === formState?.delivery?.value)?.id || '',
            },
            comment: formState?.commentary || '',
        };

        try {
            const response = await makeOrder(requestData);

            console.log('response: ', response);

            toast(
                <Toast
                    variant={ToastVariants.Success}
                    message={'Zamówienie zostało przyjęte'}
                />,
            );
        } catch (error: any) {
            toast(
                <Toast
                    variant={ToastVariants.Error}
                    message={error?.response?.data?.detail || 'Server error! Try again'}
                />,
            );
        } finally {
            setIsLoading(false);
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
                <h3 className="section-headline">Dostawa</h3>
                <SimpleSelect
                    multiline={false}
                    error={errors?.['delivery.value']}
                    options={delivery.map((element) => ({
                        label: element.name || '',
                        value: element.id || '' }))
                    }
                    onChange={((newValue) => setFormState({ ...formState, delivery: newValue as Option<string> }))}
                />
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

            <Container className="layout-layout-container" >
                <h3 className="section-headline">Dodatwowa informacja</h3>
                <SimpleTextArea
                    rows={6}
                    placeholder="Komentarz"
                    value={formState.commentary}
                    error={errors.commentary}
                    onChange={(e) => setFormState({ ...formState, commentary: e.target.value })}
                />
            </Container>

            <Container className="inner-actions">
                <Button
                    className="button-add-to-cart"
                    onClick={handleSubmit}
                    loading={isLoading}
                    disabled={!shoppingCart?.length}
                >
                    Złoż zamówinie
                </Button>
            </Container>
        </StyledComponent>
    );
};

export default ShoppingCartSectionContact;
