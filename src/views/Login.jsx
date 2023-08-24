import { createRef, useState } from "react"
import { Link } from "react-router-dom"
import Alerta from '../components/Alerta';
import { useAuth } from "../hooks/useAuth";

export default function Login() {

  const emailRef = createRef();
  const passwordRef = createRef();

  const [errores, setErrores] = useState([]);
  const { login } = useAuth({
    middleware: 'guest',
    url: '/'
  });

  const handleSubmit = async e => {
    e.preventDefault();

    const datos = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }

    //console.log(datos);

    login(datos, setErrores);
    
  }

  return (
    <>
      <h1 className="text-4xl font-black">Iniciar sesión</h1>
      <p>Inicia sesión rellenando tu email y password para crear tu pedido</p>

      <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
        <form onSubmit={handleSubmit} noValidate>

          {errores ? errores.map(error => <Alerta key={error}>{error}</Alerta>) : null}

          <div className="mb-4">
            <label className="text-slate-800" htmlFor="email">Email</label>
            <input type="text" id="email" className="mt-2 block p-3 bg-gray-100 w-full" name="email" placeholder="Escribe aquí tu email" ref={emailRef} />
          </div>
          <div className="mb-4">
            <label className="text-slate-800" htmlFor="password">Password</label>
            <input type="password" id="password" className="mt-2 block p-3 bg-gray-100 w-full" name="password" placeholder="Escribe aquí tu password" ref={passwordRef} />
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
