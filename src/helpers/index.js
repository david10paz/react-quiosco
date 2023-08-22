export const formatearDinero = cantidad => {
    return cantidad.toLocaleString('en-us', {
        style: 'currency',
        currency: 'USD'
    })
}