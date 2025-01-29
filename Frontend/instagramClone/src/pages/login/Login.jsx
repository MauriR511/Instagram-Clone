const Login = () => {
    return (
        <section className="flex items-center justify-center min-h-screen ">
            <div className="bg-primary flex">
                <div className="w-1/2">
                    <form className="flex flex-col max-w-md p-5 text-white">
                        <h2 className="text-4xl mb-5">Login</h2>
                        <input className="bg-white border border-gray-900 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-5" type="text" placeholder="Username" />
                        <input className="bg-white border border-gray-900 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-5" type="password" placeholder="Password" />
                        <button className="bg-tertiary text-black mb-5 rounded-lg p-2.5 hover:bg-secondary">Login</button>
                        <div className="grid grid-cols-3 gap-1 ">
                            <hr/>
                            <p className="">O</p>
                            <hr />
                        </div>
                    </form>
                    <button className="text-white">Inicia sesion con Google</button>
                        <p className="text-white">Olvidsaste tu contraseña</p>
                    <div className="text-white">
                        <p>¿No tienes cuenta?</p>
                        <button>Registrate</button>
                    </div>
                </div>
                <div className="w-1/2 p-5 max-w-2xl">
                    <img className="" src="https://wallpapercave.com/wp/wp4381372.jpg" alt="" />
                </div>
            </div>
        </section>
    );
};

export default Login;