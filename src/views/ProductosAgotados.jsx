import useSWR from "swr"
import clienteAxios from "../config/axios"
import Producto from "../components/Producto"

export default function ProductosAgotados() {
    const token = localStorage.getItem('AUTH_TOKEN');
    const fetcher = () => clienteAxios('api/productos-agotados', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(datos => datos.data)

    const { data, error, isLoading } = useSWR('api/productos-agotados', fetcher, { refreshInterval: 10000 });
    console.log(data);

    if (isLoading) return 'Cargando';

    return (
        <div>
            <h1 className="text-4xl font-black">Productos</h1>
            <p className="text-2xl my-10">Maneja la vuelta de los productos agotados a disponibles aquí</p>

            {data.data.length <= 0 && (
                <p className="text-lg my-10">No hay productos agotados por el momento</p>
            )}

            {data.data.length > 0 && (
                <div className='grid gap-4 grid-cols-1 md:grid-cols-4 xl-grid-cols-5'>
                    {data.data.map(producto => {
                        return (<Producto key={producto.imagen} producto={producto} botonAgotado={true} />)
                    })}
                </div>
            )}
        </div>
    )
}
