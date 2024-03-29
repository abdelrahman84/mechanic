import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react-native'

import RegisterForm from '../UI_Components/RegisterForm';

describe('Register form', () => {

    test('Register form should render correctly', async () => {

        navigateToLogin = jest.fn();
        formSumbit = jest.fn();

        const { queryByTestId, getByPlaceholderText, queryByText } = render(<RegisterForm onNavigateToLogin={navigateToLogin} onFormSumbit={formSumbit}
            isLoading={false} />)

        const registerBtn = queryByTestId('register-btn');
        const loginLink = queryByText('Login');

        await waitFor(() => {
            expect(registerBtn).not.toBeNull();
            expect(loginLink).not.toBeNull();
            expect(registerBtn).toBeDisabled();
        })

        const fullNameInput = getByPlaceholderText('full name');
        const emailInput = getByPlaceholderText('email');
        const phoneNumberInput = getByPlaceholderText('phone number');

        await act(async () =>
            fireEvent.changeText(fullNameInput, 'Abdelrahman Ahmed'),
            fireEvent.changeText(emailInput, 'test@test.com'),
            fireEvent.changeText(phoneNumberInput, '01234567891'),
        )
        expect(registerBtn).not.toBeDisabled();

        await act(async () =>
            fireEvent.press(registerBtn));
        expect(formSumbit).toHaveBeenCalled();

        // test for login link
        fireEvent.press(loginLink);
        expect(navigateToLogin).toHaveBeenCalled();

    })
})