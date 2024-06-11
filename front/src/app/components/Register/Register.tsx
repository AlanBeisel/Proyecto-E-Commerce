"use client"
import React, { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

interface FormularioData {
    name: string;
    email: string;
    password: string;
    address: string;
    phone: string;
}

const RegistroFormulario: React.FC = () => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const router = useRouter();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setErrorMessage(null);
        setSuccessMessage(null);

        const formData = new FormData(event.currentTarget);
        const formValues: FormularioData = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            password: formData.get('password') as string,
            address: formData.get('address') as string,
            phone: formData.get('phone') as string,
        };

        // Validaciones
        if (!formValues.name || !formValues.email || !formValues.password || !formValues.address || !formValues.phone) {
            setErrorMessage('Todos los campos son obligatorios.');
            return;
        }

        if (formValues.password.length < 6) {
            setErrorMessage('La contraseña debe tener al menos 6 caracteres.');
            return;
        }

        const confirmPassword = formData.get('confirmar') as string;
        if (formValues.password !== confirmPassword) {
            setErrorMessage('Las contraseñas no coinciden.');
            return;
        }

        try {
            const response = await fetch('http://localhost:3001/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formValues),
            });

            if (!response.ok) {
                const errorData = await response.json();
                setErrorMessage(errorData.message || 'Error durante el registro');
                return;
            }

            setSuccessMessage('Registro exitoso');
        } catch (error) {
            console.error('Error durante el registro:', error);
            setErrorMessage('Hubo un problema durante el registro. Por favor, inténtalo de nuevo.');
        }
    };

    const handleSuccessClick = () => {
        router.push('/login');
    };

    return (
        <div className="h-full w-screen flex justify-center items-center m-4">
            <div className="lg:w-2/5 md:w-1/2 w-2/3">
                <form onSubmit={handleSubmit} className="bg-white p-10 rounded-lg shadow-lg min-w-full">
                    <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Formulario de registro</h1>

                    <div>
                        <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="name">Nombre</label>
                        <input
                            className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Nombre"
                            required
                        />
                    </div>

                    <div>
                        <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="email">Email</label>
                        <input
                            className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            required
                        />
                    </div>

                    <div>
                        <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="password">Contraseña</label>
                        <input
                            className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Contraseña"
                            required
                        />
                    </div>

                    <div>
                        <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="confirmar">Confirmar Contraseña</label>
                        <input
                            className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                            type="password"
                            name="confirmar"
                            id="confirmar"
                            placeholder="Confirmar Contraseña"
                            required
                        />
                    </div>

                    <div>
                        <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="address">Dirección</label>
                        <input
                            className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                            type="text"
                            name="address"
                            id="address"
                            placeholder="Dirección"
                            required
                        />
                    </div>

                    <div>
                        <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="phone">Teléfono</label>
                        <input
                            className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                            type="tel"
                            name="phone"
                            id="phone"
                            placeholder="Teléfono"
                            required
                        />
                    </div>

                    {errorMessage && (
                        <p className="text-red-600 mt-2">{errorMessage}</p>
                    )}

                    {successMessage ? (
                        <div className="mt-4 p-4 bg-green-100 rounded-md text-green-800">
                            <p>{successMessage}</p>
                            <button
                                onClick={handleSuccessClick}
                                className="mt-2 bg-green-600 text-white px-4 py-2 rounded-md"
                            >
                                OK
                            </button>
                        </div>
                    ) : (
                        <button
                            type="submit"
                            className="w-full mt-6 bg-blue-500 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
                        >
                            Registrar
                        </button>
                    )}

                    <button
                        onClick={() => router.push('/')}
                        className="w-full mt-3 bg-blue-100 rounded-lg px-4 py-2 text-lg text-gray-800 tracking-wide font-sans"
                    >
                        Cerrar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegistroFormulario;