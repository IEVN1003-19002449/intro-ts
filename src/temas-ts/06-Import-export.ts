import {calcularIva2, Producto} from "./05-desestructuracion-funciones"

const carrito:Producto[]=[
    {
        desc: 'Motorola',
        precio: 2000
    },
    {
        desc: 'Samsung',
        precio: 2100
    },
    {
        desc: 'Xiaomi',
        precio: 1900
    }
]

const [total, iva2] = calcularIva2(carrito);
console.log(`Total: ${total}`);
console.log(`IVA: ${iva2}`);