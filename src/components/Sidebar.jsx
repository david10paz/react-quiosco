import useQuiosco from "../hooks/useQuiosco"
import Categoria from "./Categoria"


export default function Sidebar() {

    const {categorias} = useQuiosco()

    return (
        <aside className="md:w-72">
            <div className="p-4">
                <img className="w-40" src="img/logo.svg" alt="Imagen iconoo" />
            </div>

            <div className="mt-10">
                {categorias.map(categoria => {
                    //Le pasamos un prop de las categorias a el componente Categorias
                    return (<Categoria key={categoria.id} categoria={categoria} />)
                })}
            </div>

            <div className="my-5 px-5">
                <button type="button" className="text-center bg-red-500 text-white font-bold w-full p-3 truncate">Cancelar pedido</button>
            </div>
        </aside>
    )
}
