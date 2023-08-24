import { createRef, useState } from "react"
import { Link } from "react-router-dom"
import Alerta from '../components/Alerta';
import { useAuth } from "../hooks/useAuth";

export default function Register() {

  const nameRef = createRef();
  const emailRef = createRef();
  const passwordRef = createRef();
  const passwordConfirmationRef = createRef();

  const [errores, setErrores] = useState([]);
  const { register } = useAuth({
    middleware: 'guest',
    url: '/'
  });

  const handleSubmit = async e => {
    e.preventDefault();

    const datos = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    }

    //console.log(datos);

    register(datos, setErrores);
  }

  return (
    <>
      <h1 className="text-4xl font-black">Crea tu cuenta</h1>
      <p>Crea tu cuenta rellenando este formulario</p>

      <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
        <form onSubmit={handleSubmit}>

          {errores ? errores.map(error => <Alerta key={error}>{error}</Alerta>) : null}

          <div className="mb-4">
            <label className="text-slate-800" htmlFor="name">Nombre</label>
            <input type="text" id="name" className="mt-2 block p-3 bg-gray-100 w-full" name="name" placeholder="Escribe aquí tu nombre" ref={nameRef} />
          </div>
          <div className="mb-4">
            <label className="text-slate-800" htmlFor="email">Email</label>
            <input type="text" id="email" className="mt-2 block p-3 bg-gray-100 w-full" name="email" placeholder="Escribe aquí tu email" ref={emailRef} />
          </div>
          <div className="mb-4">
            <label className="text-slate-800" htmlFor="password">Password</label>
            <input type="password" id="password" className="mt-2 block p-3 bg-gray-100 w-full" name="password" placeholder="Escribe aquí tu password" ref={passwordRef} />
          </div>
          <div className="mb-4">
            <label className="text-slate-800" htmlFor="password_confirmation">Confirmar password</label>
            <input type="password" id="password_confirmation" className="mt-2 block p-3 bg-gray-100 w-full" name="password_confirmation" placeholder="Escribe aquí tu password de nuevo" ref={passwordConfirmationRef} />
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
