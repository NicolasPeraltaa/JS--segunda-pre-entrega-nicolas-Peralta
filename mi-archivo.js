let productos = [
    { id: 1, nombre: "IPHONE 15 PLUS", categoria: "celulares", stock: 8, precio: 2300 },
    { id: 2, nombre: "IPHONE 15", categoria: "celulares", stock: 30, precio: 1990 },
    { id: 3, nombre: "IPHONE 15 PRO MAX", categoria: "celulares", stock: 30, precio: 2599 },
    { id: 4, nombre: "IPHONE 14 PRO MAX", categoria: "celulares", stock: 30, precio: 1899 },
    { id: 5, nombre: "IPHONE 14 PRO", categoria: "celulares", stock: 30, precio: 1600 },
    { id: 6, nombre: "APPLE AIRPODS - GEN 3", categoria: "accesorios", stock: 4, precio: 499 },
    { id: 7, nombre: "APPLE AIRPODS - GEN 4", categoria: "accesorios", stock: 4, precio: 350 },
    { id: 8, nombre: "APPLE KEYBOARD - GEN 1", categoria: "accesorios", stock: 4, precio: 280 },
    { id: 9, nombre: "APPLE MACBOOK - GEN3", categoria: "computadores", stock: 1, precio: 7500 },
    { id: 10, nombre: "APPLE MAC CHIP M1", categoria: "computadores", stock: 1, precio: 2500 },
    { id: 11, nombre: "APPLE MAC CHIP M2", categoria: "computadores", stock: 1, precio: 4350 },
    { id: 12, nombre: "APPLE iPAD 10", categoria: "tablets", stock: 0, precio: 1200 },
    { id: 13, nombre: "APPLE iPAD 8", categoria: "tablets", stock: 0, precio: 800 },
    { id: 14, nombre: "APPLE iPAD", categoria: "tablets", stock: 0, precio: 359 },
    { id: 15, nombre: "IPHONE 13", categoria: "celulares", stock: 1, precio: 750 },
    { id: 16, nombre: "IPHONE SE 2021", categoria: "celulares", stock: 0, precio: 650 },
    { id: 17, nombre: "IPHONE 13 PRO MAX", categoria: "celulares", stock: 2, precio: 999 },
]

InicioDeSesion()
principal(productos)
function principal(productos) {
    let carrito = []
    let opcion
    do {
        opcion = Number(prompt("Ingrese opción:\n1 - listar productos\n2 - filtrar por categoria\n3 - agregar producto al carrito\n4 - ordenar por precio asc\n5 - finalizar compra\n0 - para salir"))
        switch (opcion) {
            case 1:
                alert(listar(productos))
                break
            case 2:
                alert(filtrarPorCategoria(productos));
                break;

            default:
                break
        }
    } while (opcion != 0)
}

function listar(productos) {
    return productos.map(producto => producto.id + " - " + producto.nombre + " - USD" + producto.precio).join("\n")
}
function obtenerCategorias(productos) {
    const categorias = productos.map(producto => producto.categoria);
    return [...new Set(categorias)]
}
function filtrarPorCategoria(productos) {
    const categoriasDisponibles = obtenerCategorias(productos)
    const categoriaSeleccionada = prompt("Ingrese la categoría que desea filtrar:\n Categorías disponibles: " + categoriasDisponibles.join(", "))

    const productosFiltrados = productos.filter(producto => producto.categoria.toLowerCase() === categoriaSeleccionada)

    if (productosFiltrados.length === 0) {
        return "No se encontraron productos en la categoría seleccionada."
    } else {
        return "Productos en la categoría " + categoriaSeleccionada + ":\n" + listar(productosFiltrados)
    }
}
function InicioDeSesion() {
    alert("Bienvenido a iPlace, la tienda oficial de venta de productos Apple en Uruguay! Por favor, pulsa ENTER para continuar al inicio de sesion.")

    const usuarioBD = "Nico123";
    const contraseniaBD = "Nico123456";
    let contador = 0;
    let inicioCorrecto = false;
    do {
        const usuario = prompt("Ingrese usuario")
        const contrasenia = prompt("Ingrese contraseña")
        contador++

        if (usuario === usuarioBD && contrasenia === contraseniaBD) {
            alert("Bienvenido " + usuario);
            inicioCorrecto = true
            break;
        } else {
            alert("Usuario y/o contraseña incorrecto/s");
        }
    } while (contador < 3)

    if (contador === 3 && !inicioCorrecto) {
        alert("Agotaste tus intentos, volvé más tarde");

    }

} 