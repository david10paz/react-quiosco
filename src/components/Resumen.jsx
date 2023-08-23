import { formatearDinero } from "../helpers"
import useQuiosco from "../hooks/useQuiosco"
import ResumenProducto from "./ResumenProducto"

export default function Resumen() {

  const { pedido, total } = useQuiosco()

  const comprobarPedido = () => pedido.length === 0;

  return (
    <aside className="w-72 h-screen overflow-y-scroll p-5">
      <h1 className="text-4xl font-black">Mi pedido</h1>
      <p className="text-lg my-5">Aquí podrás ver un resumen de tu pedido</p>

      <div className="py-10">
        {pedido.length === 0 ? (
          <p className="font-bold">No hay nada añadido</p>
        ) : (
          pedido.map(producto => (
            <ResumenProducto key={producto.id} producto={producto} />
          ))
        )}
      </div>

      <p className="text-xl mt-10">Total: {formatearDinero(total)} </p>

      <form className="w-full">
        <div className="mt-5">
          <input type="submit" className={`${comprobarPedido() ? 'bg-indigo-100' : 'bg-indigo-500 hover:bg-indigo-600'} text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer`} value={'Confirmar pedido'} disabled={comprobarPedido()} />
        </div>
      </form>

    </aside >
  )
}
