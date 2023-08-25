import useSWR from "swr"
import clienteAxios from "../config/axios"
import useQuiosco from "../hooks/useQuiosco";
import { formatearDinero } from "../helpers";

export default function Ordenes() {

    const token = localStorage.getItem('AUTH_TOKEN');
    const fetcher = () => clienteAxios('api/pedidos', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    const { data, error, isLoading } = useSWR('api/pedidos', fetcher);
    //console.log(data);

    const {handleClickCompletarPedido} = useQuiosco();

    if (isLoading) return 'Cargando';

    return (
        <div>
            <h1 className="text-4xl font-black">Ordenes</h1>
            <p className="text-2xl my-10">Administa aquí las ordenes</p>

            <div className="grid grid-cols-2 gap-2">
                {data.data.data.map(pedido => (
                    <div key={pedido.id} className="p-5 bg-white shadow space-y-2 border-b">
                        <p className="text-xl font-bold text-slate-600">Contenido del pedido:</p>
                        {pedido.productos.map(producto => (
                            <div key={producto.id} className="border-b-slate-200 last-of-type:border-none py-4">
                                <p className="text-sm">ID: <b>{producto.id}</b></p>
                                <p className="text-sm">Nombre: <b>{producto.nombre}</b></p>
                                <p className="text-sm">Cantidad: <b>{producto.pivot.cantidad}</b></p>
                            </div>
                        ))}

                        <p className="text-lg font-bold text-slate-600">
                            Cliente: <span className="font-normal">{pedido.user.name}</span>
                        </p>
                        <p className="text-lg font-bold text-amber-600">
                            Total a pagar: <span className="font-normal">{formatearDinero(pedido.total)}</span>
                        </p>

                        <button type="button" onClick={() => handleClickCompletarPedido(pedido.id)} className='bg-indigo-500 hover:bg-indigo-600text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer text-white'>Completar</button>

                    </div>
                ))}

            </div>
        </div>

    )
}
