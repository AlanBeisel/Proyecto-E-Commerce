"use client";
import React, {useState} from 'react';


const LoginForm: React.FC = () => {
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
        <div className="h-full w-screen flex justify-center items-center m-4">
        <div className="lg:w-2/5 md:w-1/2 w-2/3">
            <form onSubmit={handleSubmit} className="bg-white p-10 rounded-lg shadow-lg min-w-full">
                <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Iniciar sesión</h1>

                <div>
                    <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="email">Email</label>
                    <input
                        className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                {errorMessage && (
                    <p className="text-red-600 mt-2">{errorMessage}</p>
                )}

                <button
                    type="submit"
                    className="w-full mt-6 bg-blue-500 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
                >
                    Iniciar sesión
                </button>
            

            <div className="mt-6 text-center text-gray-600">
                <h2 className="text-center text-2x2 mb-6 text-gray-600 font-bold font-sans">O inicia sesión con:</h2>
            </div>
            

            <div className="flex flex-col items-center gap-2 mt-4">
                        <button
                            className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md w-full px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-6 w-6 mr-2" />
                            <span>Continuar con Google</span>
                        </button>

                        <button
                            className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md w-full px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                            <img src="https://www.svgrepo.com/show/448234/linkedin.svg" alt="LinkedIn" className="h-6 w-6 mr-2" />
                            <span>Continuar con LinkedIn</span>
                        </button>

                        <button
                            className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md w-full px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                            <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="GitHub" className="h-6 w-6 mr-2" />
                            <span>Continuar con GitHub</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
);
};

export default LoginForm;




