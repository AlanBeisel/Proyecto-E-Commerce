"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import React, { useState, } from "react";
import { Navbar } from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import RegistroFormulario from "./components/Register/Register";
import { metadata } from "./metadata";
import LoginForm from "./components/Login/Login";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const [showForm, setShowForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  
  const handleShowLoginForm = () => setShowLoginForm(true);
  const handleHideLoginForm = () => setShowLoginForm(false);
  const handleShowForm = () => setShowForm(true);
  const handleHideForm = () => setShowForm(false);

  const handleLoginSuccess = () => {
    alert('Inicio de sesión exitoso');
    setShowLoginForm(false); 
};

const handleRegistrationSuccess = () => {
  setRegistrationSuccess(true);
  handleHideForm(); 
  setTimeout(() => {
    setRegistrationSuccess(false);
  }, 3000); 
};

  return (
    <html lang="en">
      <head>
        <title>{String(metadata.title)}</title>
      </head>
      <body className={inter.className}>
      <ToastContainer />
        <Navbar onRegisterClick={handleShowForm} onLoginClick={handleShowLoginForm} />

        {showLoginForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative bg-white rounded-lg shadow-lg">
            <LoginForm onClose={handleHideLoginForm} onLoginSuccess={handleLoginSuccess} />
            </div>
          </div>
        )}
        
        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative bg-white rounded-lg shadow-lg">
              <RegistroFormulario onClose={handleHideForm} onRegistrationSuccess={handleRegistrationSuccess} />
            </div>
          </div>
        )}

        {registrationSuccess && (
          <div className="fixed inset-x-0 top-0 z-50 p-4 bg-green-500 text-white text-center">
            Usuario registrado con éxito
          </div>
        )}
        
        {children}
        <Footer />
      </body>
    </html>
  );
}
