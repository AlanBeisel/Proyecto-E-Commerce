import React, { FormEvent } from 'react';

interface RegistroFormularioProps {
    onClose: () => void; // Define la propiedad onClose
}


const RegistroFormulario: React.FC<RegistroFormularioProps> = ({ onClose }) => {
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        // Aquí puedes manejar el envío del formulario
    };
    

    return (
        <div className="h-full w-screen bg-blue-100 flex justify-center items-center">
            <div className="lg:w-2/5 md:w-1/2 w-2/3">
                <form onSubmit={handleSubmit} className="bg-white p-10 rounded-lg shadow-lg min-w-full">
                    <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Registro de Formulario</h1>
                    <div>
                        <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="nombre">Nombre</label>
                        <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="nombre" id="nombre" placeholder="Nombre" />
                    </div>

                    <div>
                        <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="email">Email</label>
                        <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="email" name="email" id="email" placeholder="Email" />
                    </div>

                    <div>
                        <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="password">Contraseña</label>
                        <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="password" name="password" id="password" placeholder="Contraseña" />
                    </div>

                    <div>
                        <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="confirmar">Confirmar Contraseña</label>
                        <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="password" name="confirmar" id="confirmar" placeholder="Confirmar Contraseña" />
                    </div>

                    <div>
                        <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="direccion">Dirección</label>
                        <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="direccion" id="direccion" placeholder="Dirección" />
                    </div>

                    <div>
                        <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="telefono">Teléfono</label>
                        <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="tel" name="telefono" id="telefono" placeholder="Teléfono" />
                    </div>

                    <button type="submit" className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans">Registrar</button>
                    <button type="button" className="w-full mt-6 mb-3 bg-indigo-100 rounded-lg px-4 py-2 text-lg text-gray-800 tracking-wide font-sans">Iniciar sesión</button>
                    <button onClick={onClose}  className="w-full mt-3 mb-3 bg-indigo-100 rounded-lg px-4 py-2 text-lg text-gray-800 tracking-wide font-sans">Cerrar</button>
                </form>
            </div>
        </div>
    );
};

export default RegistroFormulario;
