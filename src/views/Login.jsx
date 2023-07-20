import { Link } from "react-router-dom"

export default function Login() {
  return (
    <>
      <h1 className="text-4xl font-black">Iniciar sesión</h1>
      <p>Inicia sesión rellenando tu email y password para crear tu pedido</p>

      <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
        <form>
          <div className="mb-4">
            <label className="text-slate-800" htmlFor="email">Email</label>
            <input type="text" id="email" className="mt-2 block p-3 bg-gray-100 w-full" name="email" placeholder="Escribe aquí tu email" />
          </div>
          <div className="mb-4">
            <label className="text-slate-800" htmlFor="password">Password</label>
            <input type="password" id="password" className="mt-2 block p-3 bg-gray-100 w-full" name="password" placeholder="Escribe aquí tu password" />
          </div>

          <input type="submit" value="Iniciar sesión" className="bg-indigo-600 hover:bg-indigo-800 text-white w-full uppercase mt-5 p-3 font-bold cursor-pointer" />

        </form>
      </div>

      <nav className="mt-5">
        <Link to="/auth/register">¿No tienes cuenta? <span className="font-bold text-indigo-600">¡Crea una!</span></Link>
      </nav>
    </>
  )
}
