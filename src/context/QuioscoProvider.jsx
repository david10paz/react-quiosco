import { createContext, useState, useEffect } from "react"
import { toast } from 'react-toastify'
import { categorias as categoriasDB } from "../data/categorias"

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {

    const [categorias, setCategorias] = useState(categoriasDB);
    const [categoriaActual, setCategoriaActual] = useState(categorias[0]);
    const [modal, setModal] = useState(false);
    const [producto, setProducto] = useState({});
    const [pedido, setPedido] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const nuevoTotal = pedido.reduce((total, producto) => (producto.precio * producto.cantidad) + total, 0)
        setTotal(nuevoTotal)
    }, [pedido])

    const handleClickCategoria = id => {
        //console.log(id)
        const categoria = categorias.filter(categoria => categoria.id === id)[0]
        setCategoriaActual(categoria)
    }

    const handleClickModal = () => {
        setModal(!modal)
    }

    const handleSetProducto = producto => {
        setProducto(producto);
    }

    //Con los ... lo que hacemos es que el producto que se le pasa no le necesitamos la categoria_id
    const handleAgregarPedido = ({ categoria_id, ...producto }) => {
        if (pedido.some(pedidoState => pedidoState.id === producto.id)) {
            const pedidoActualizado = pedido.map(pedidoState => pedidoState.id === producto.id ? producto : pedidoState)
            setPedido(pedidoActualizado)
            toast.success('Guardada modificación al pedido')
        }
        else {
            setPedido([...pedido, producto])
            toast.success('Agreado al pedido')
        }
    }

    const handleEditarCantidad = id => {
        const productoActualizar = pedido.filter(producto => producto.id === id)[0]
        setProducto(productoActualizar)
        setModal(!modal)
    }

    const handleEliminarProductoPedido = id => {
        const pedidoActualizado = pedido.filter(producto => producto.id !== id)
        setPedido(pedidoActualizado)
        toast.success('Producto eliminado del pedido')
    }

    return (<QuioscoContext.Provider value={{
        categorias, categoriaActual, handleClickCategoria, modal, handleClickModal, producto, handleSetProducto, pedido, handleAgregarPedido, handleEditarCantidad, handleEliminarProductoPedido, total
    }}>{children}</QuioscoContext.Provider>)

}

export { QuioscoProvider }

export default QuioscoContext