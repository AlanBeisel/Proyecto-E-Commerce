import React from 'react';

interface LoginFormProps {
    onClose: () => void;
    onSubmit: (data: { email: string; password: string }) => void;
}


const LoginForm: React.FC<LoginFormProps> = ({ onClose, onSubmit }) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // Obtenemos los valores de los campos
        const formData = new FormData(e.target as HTMLFormElement);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        
        // Llamamos a la función `onSubmit` con los datos de inicio de sesión
        onSubmit({ email, password });
    };

    return (
        <div className="h-full w-screen bg-blue-100 flex justify-center items-center">
            <div className="lg:w-2/5 md:w-1/2 w-2/3">
                <form onSubmit={handleSubmit}  className="bg-white p-10 rounded-lg shadow-lg min-w-full">
                    <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Iniciar sesión</h1>
                    
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

                    <button
                        type="submit"
                        className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
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

export default LoginForm;
