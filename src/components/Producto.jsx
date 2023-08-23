import { formatearDinero } from '../helpers/index'
import useQuiosco from "../hooks/useQuiosco"

export default function Producto(props) {

    const { nombre, precio, imagen } = props.producto
    const { handleClickModal, handleSetProducto } = useQuiosco();


    return (
        <div className='border p-3 shadow bg-white' >
            <img className="w-full" src={`/img/${imagen}.jpg`} alt="Imagen producto especifico" />
            <div className="p-5">
                <p className="font-bold text-2xl">{nombre}</p>
                <p className="mt-5 font-black text-4xl text-amber-500">{formatearDinero(precio)}</p>
            </div>
            <button type='button' onClick={() => { handleClickModal(); handleSetProducto(props.producto); }} className='bg-indigo-500 hover:bg-indigo-600 text-white w-full mt-5 p-3 uppercase font-bold'>
                Añadir al carrito
            </button>
        </div>
    )
}
