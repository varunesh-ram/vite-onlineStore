import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "./index";


test('Displays Login header in the Login page', () => {

    render(<Login />);
    const titleElement = screen.getByTestId('login-heading');
    expect(titleElement).toBeInTheDocument();
})

test('Displays Username and password field with Login button', () => {

    render(<Login />);
    const inputUsername = screen.getByPlaceholderText("Username");
    fireEvent.change(inputUsername, { target: { value: "User" } });
    expect(inputUsername.value).toBe("User");

    const inputPassword = screen.getByPlaceholderText("Password");
    fireEvent.change(inputPassword, { target: { value: "User123" } });
    expect(inputPassword.value).toBe("User123");

    const loginButton = screen.getByTestId('login-id');
    expect(loginButton).toBeInTheDocument();

})

test("Toggle between register screen and Login Screen when user clicks on New User button", () => {
    render(<Login />);
      let toggleUserTypeButton = screen.getByTestId('toggle-user-type');
      let loginOrRegisterButton = screen.getByTestId('login-id');
      let firstNameField = screen.queryByPlaceholderText('First Name');
      let lastNameField = screen.queryByPlaceholderText('Last Name');
      let confirmPasswordField = screen.queryByPlaceholderText('Confirm Password');
      
      expect(toggleUserTypeButton).toBeInTheDocument();
      expect(toggleUserTypeButton).toHaveTextContent("New User");
      expect(loginOrRegisterButton).toBeInTheDocument();
      expect(loginOrRegisterButton).toHaveTextContent("Login");
      expect(firstNameField).toBeNull();
      expect(lastNameField).toBeNull();
      expect(confirmPasswordField).toBeNull();
      fireEvent.click(toggleUserTypeButton);

      toggleUserTypeButton = screen.getByTestId('toggle-user-type');
      loginOrRegisterButton = screen.getByTestId('login-id');
      firstNameField = screen.queryByPlaceholderText('First Name');
      lastNameField = screen.queryByPlaceholderText('Last Name');
      confirmPasswordField = screen.queryByPlaceholderText('Confirm Password');
     
      expect(toggleUserTypeButton).toHaveTextContent("Already a user?");
      expect(loginOrRegisterButton).toHaveTextContent("Register");
      expect(firstNameField).toBeInTheDocument();
      expect(lastNameField).toBeInTheDocument();
      expect(confirmPasswordField).toBeInTheDocument();
      
});

test("Login button should be enabled only after filling all the fields", () => {
    render(<Login />);
    const LoginButton = screen.getByTestId('login-id');
    expect(LoginButton).toBeDisabled();
    const userNameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');
    fireEvent.change(userNameInput, { target: { value: 'testUser' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    expect(LoginButton).toBeEnabled();
 });

test("Register button should be enabled only after filling all the fields", () => {
    render(<Login />);
    const toggleUserTypeButton = screen.getByTestId('toggle-user-type');
    fireEvent.click(toggleUserTypeButton);
    const registerButton = screen.getByTestId('login-id');
    expect(registerButton).toBeDisabled();
    const userNameInput = screen.getByPlaceholderText('Username');
    const firstNameInput = screen.getByPlaceholderText('First Name');
    const lastNameInput = screen.getByPlaceholderText('Last Name');
    const passwordInput = screen.getByPlaceholderText('Password');
    const confirmPasswordInput = screen.getByPlaceholderText('Confirm Password');
    fireEvent.change(userNameInput, { target: { value: 'testUser' } });
    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'password123' } });
    expect(registerButton).toBeEnabled();
 });

 test("If Password and Confirm password not same,Register button should not be enabled", () => {
    render(<Login />);
       const toggleUserTypeButton = screen.getByRole('button', { name: /New User/i });
       fireEvent.click(toggleUserTypeButton);
       const registerButton = screen.getByTestId('login-id');
       expect(registerButton).toBeDisabled();
       const userNameInput = screen.getByPlaceholderText('Username');
       const firstNameInput = screen.getByPlaceholderText('First Name');
       const lastNameInput = screen.getByPlaceholderText('Last Name');
       const passwordInput = screen.getByPlaceholderText('Password');
       const confirmPasswordInput = screen.getByPlaceholderText('Confirm Password');
       fireEvent.change(userNameInput, { target: { value: 'testUser' } });
       fireEvent.change(firstNameInput, { target: { value: 'John' } });
       fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
       fireEvent.change(passwordInput, { target: { value: 'password123' } });
       fireEvent.change(confirmPasswordInput, { target: { value: 'password' } });
       expect(registerButton).toBeDisabled;
 });