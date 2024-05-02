"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import React, { useState } from "react";
import { Navbar } from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import RegistroFormulario from "./components/Register/Register";
import { metadata } from "./metadata";
import LoginForm from "./components/Login/Login";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }:  Readonly<{ children: React.ReactNode }>) {
  const [showForm, setShowForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleShowLoginForm = () => {
    setShowLoginForm(true);
};

const handleHideLoginForm = () => {
    setShowLoginForm(false);
};

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleHideForm = () => {
    setShowForm(false);
  };

  const handleSubmitLoginForm = (formData: { email: string; password: string }) => {
    // Maneja el envío del formulario de inicio de sesión aquí
    // Por ejemplo, podrías hacer una solicitud a un servidor para iniciar sesión
    console.log("Form data:", formData);
    // Cierra el formulario de inicio de sesión después de manejar el envío
    handleHideLoginForm();
};

  return (
    <html lang="en">
      <head>
        <title>{String(metadata.title)}</title>
      </head>
      <body className="inter">
        <Navbar onRegisterClick={handleShowForm} onLoginClick={handleShowLoginForm} />
        {showLoginForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg shadow-lg">
                    <LoginForm onClose={handleHideLoginForm} onSubmit={handleSubmitLoginForm} />
                  </div>
                  </div>
                )}
        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative bg-white rounded-lg shadow-lg">
              <RegistroFormulario onClose={handleHideForm} />
            </div>
          </div>
        )}
        {children}
        <Footer />
      </body>
    </html>
  );
}