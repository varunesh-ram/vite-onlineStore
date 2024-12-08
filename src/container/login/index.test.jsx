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