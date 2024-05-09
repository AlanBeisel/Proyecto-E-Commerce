import React, { FormEvent, useState } from 'react';

interface RegistroFormularioProps {
    onClose: () => void; 
}

interface FormularioData {
    name: string;
    email: string;
    password: string;
    address: string;
    phone: string;
}

const RegistroFormulario: React.FC<RegistroFormularioProps> = ({ onClose }) => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

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

        console.log('Datos del formulario:', formValues);

        
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

            
            const data = await response.json();
            setSuccessMessage('Registro exitoso');
        
        } catch (error) {
            console.error('Error durante el registro:', error);
            setErrorMessage('Hubo un problema durante el registro. Por favor, inténtalo de nuevo.');
        }
    };

    return (
        <div className="h-full w-screen bg-blue-100 flex justify-center items-center">
            <div className="lg:w-2/5 md:w-1/2 w-2/3">
                <form onSubmit={handleSubmit} className="bg-white p-10 rounded-lg shadow-lg min-w-full">
                    <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Registro de Formulario</h1>

                    
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

                    {successMessage && (
                        <p className="text-green-600 mt-2">{successMessage}</p>
                    )}

                    
                    <button
                        type="submit"
                        className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
                    >
                        Registrar
                    </button>

                    <button
                        onClick={() => {}}
                        className="w-full mt-3 bg-indigo-100 rounded-lg px-4 py-2 text-lg text-gray-800 tracking-wide font-sans"
                    >
                        Iniciar sesión
                    </button>

                    <button
                        onClick={onClose}
                        className="w-full mt-3 bg-indigo-100 rounded-lg px-4 py-2 text-lg text-gray-800 tracking-wide font-sans"
                    >
                        Cerrar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegistroFormulario;

