import useQuiosco from "../hooks/useQuiosco"

export default function Categoria(props) {

    const { handleClickCategoria, categoriaActual } = useQuiosco();
    const { icono, id, nombre } = props.categoria

    return (
        <div className={`${categoriaActual.id == id ? "bg-amber-400" : "bg-white"} flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer`}>
            <img className="w-12" src={`/img/icono_${icono}.svg`} alt="Imagen icono producto" />
            <button type="button" onClick={() => handleClickCategoria(id)} className="font-bold text-lg cursor-pointer truncate">
                {nombre}
            </button>
        </div>
    )
}
