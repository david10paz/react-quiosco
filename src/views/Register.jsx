import { Link } from "react-router-dom"

export default function Register() {
  return (
    <>
      <h1 className="text-4xl font-black">Crea tu cuenta</h1>
      <p>Crea tu cuenta rellenando este formulario</p>

      <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
        <form>
          <div className="mb-4">
            <label className="text-slate-800" htmlFor="name">Nombre</label>
            <input type="text" id="name" className="mt-2 block p-3 bg-gray-100 w-full" name="name" placeholder="Escribe aquí tu nombre" />
          </div>
          <div className="mb-4">
            <label className="text-slate-800" htmlFor="email">Email</label>
            <input type="text" id="email" className="mt-2 block p-3 bg-gray-100 w-full" name="email" placeholder="Escribe aquí tu email" />
          </div>
          <div className="mb-4">
            <label className="text-slate-800" htmlFor="password">Password</label>
            <input type="password" id="password" className="mt-2 block p-3 bg-gray-100 w-full" name="password" placeholder="Escribe aquí tu password" />
          </div>
          <div className="mb-4">
            <label className="text-slate-800" htmlFor="password_confirmation">Confirmar password</label>
            <input type="password" id="password_confirmation" className="mt-2 block p-3 bg-gray-100 w-full" name="password_confirmation" placeholder="Escribe aquí tu password de nuevo" />
          </div>

          <input type="submit" value="Crear cuenta" className="bg-indigo-600 hover:bg-indigo-800 text-white w-full uppercase mt-5 p-3 font-bold cursor-pointer" />

        </form>

        <nav className="mt-5">
          <Link to="/auth/login">¿Ya tienes cuenta? <span className="font-bold text-indigo-600">¡Inicia sesión!</span></Link>
        </nav>
      </div>
    </>
  )
}
