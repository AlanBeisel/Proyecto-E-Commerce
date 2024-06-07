import React from 'react';

interface LoginFormProps {
    handleSubmit: (e: React.FormEvent) => void;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    errorMessage: string | null;
}

const LoginForm: React.FC<LoginFormProps> = ({ handleSubmit, email, setEmail, password, setPassword, errorMessage }) => {
    return (
        <div className="h-full w-screen bg-blue-100 flex justify-center items-center">
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
                    className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
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




