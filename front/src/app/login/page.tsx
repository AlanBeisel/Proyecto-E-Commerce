"use client"
import React, { useState } from "react"
import LoginForm from "../components/Login/Login"

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = { email, password };

        try {
            const response = await fetch('http://localhost:3001/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const { token, user } = await response.json();
                localStorage.setItem('userSession', JSON.stringify({ token, userData: user }));
                window.location.href = '/';
            } else {
                const errorData = await response.json();
                setErrorMessage(errorData.message || 'Error durante el inicio de sesión');
            }
        } catch (error) {
            console.error('Error durante el inicio de sesión:', error);
            setErrorMessage('Error durante el inicio de sesión. Intente de nuevo.');
        }
    };

    return (
        <div>
            <LoginForm 
                handleSubmit={handleSubmit} 
                email={email} 
                setEmail={setEmail} 
                password={password} 
                setPassword={setPassword} 
                errorMessage={errorMessage}
            />
        </div>
    );
};

export default LoginPage;
