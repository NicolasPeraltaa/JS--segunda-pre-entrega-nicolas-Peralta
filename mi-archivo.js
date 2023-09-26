let productos = [
    { id: 1, nombre: "IPHONE 15 PLUS", categoria: "celulares", stock: 8, precio: 2300, imagen: "iphone-15-plus.jpg"},
    { id: 2, nombre: "IPHONE 15 PRO MAX", categoria: "celulares", stock: 4, precio: 2599, imagen:"iphone15-promax.jpeg"},
    { id: 3, nombre: "IPHONE 14 PRO MAX", categoria: "celulares", stock: 0, precio: 1899, imagen:"iphone14promax.jpg"},
    { id: 4, nombre: "IPHONE 14 PRO", categoria: "celulares", stock: 2, precio: 1600, imagen:"iphone14pro.jpg"},
    { id: 5, nombre: "APPLE AIRPODS - GEN 3", categoria: "accesorios", stock: 4, precio: 499, imagen:"airpods-gen-3.jpg"},
    { id: 6, nombre: "APPLE AIRPODS - GEN 4", categoria: "accesorios", stock: 4, precio: 350, imagen:"airpodsgen4.jpg"},
    { id: 7, nombre: "APPLE MACBOOK PRO", categoria: "computadores", stock: 1, precio: 2500, imagen:"mcbookpro.jpg"},
    { id: 8, nombre: "APPLE MAC CHIP M2", categoria: "computadores", stock: 1, precio: 4350, imagen:"chipm2mac.webp"},
    { id: 9, nombre: "APPLE iPAD 10", categoria: "tablets", stock: 1, precio: 1200, imagen:"apple-ipad10.jpg"},
    { id: 10, nombre: "APPLE iPAD 8", categoria: "tablets", stock: 0, precio: 800, imagen:"appleipad8.jpg"},
    { id: 11, nombre: "APPLE iPAD", categoria: "tablets", stock: 0, precio: 359, imagen:"ipad-air.jpeg"},
    { id: 12, nombre: "IPHONE 13", categoria: "celulares", stock: 1, precio: 750, imagen:"iphone13.jpg"},
]
alert("Bienvenido a iPlace, la tienda lider de Apple en Uruguay. PRESIONA ENTER PARA INICIAR SESION!")
principal(productos)
function principal(productos) {
    let carrito = []
    let opcion;
    if (!InicioDeSesion()) {
        alert("Agotaste tus intentos, volvé más tarde.")
        return
    }
    do {
        opcion = Number(prompt("Ingrese opción:\n1 - Listar productos\n2 - Filtrar por categoría\n3 - Agregar producto al carrito\n4 - Ordenar por precio asc\n5 - Finalizar compra\n0 - Para salir"))

        switch (opcion) {
            case 1:
                alert(listar(productos))
                break
            case 2:
                alert(filtrarPorCategoria(productos))
                break
            case 3:
                alert(agregarProductoAlCarrito(productos, carrito))
                break
            case 4:
                productos = ordenarProductos(productos, 'precio', true)
                alert("Productos ordenados por precio ascendente:\n" + listar(productos))
                break
            case 5:
                finalizarCompra(carrito)
                carrito = []
                break
            default:
                break;
        }
    } while (opcion !== 0)
}

function listar(productos) {
    return productos.map(producto => producto.id + " - " + producto.nombre + " - USD" + producto.precio).join("\n")
}
function obtenerCategorias(productos) {
    let categorias = productos.map(producto => producto.categoria);
    return [...new Set(categorias)]
}
function filtrarPorCategoria(productos) {
    let categoriasDisponibles = obtenerCategorias(productos)
    let categoriaSeleccionada = prompt("Ingrese la categoría que desea filtrar:\n Categorías disponibles: " + categoriasDisponibles.join(", "))

    let productosFiltrados = productos.filter(producto => producto.categoria.toLowerCase() === categoriaSeleccionada)

    if (productosFiltrados.length === 0) {
        return "No se encontraron productos en la categoría seleccionada."
    } else {
        return "Productos en la categoría " + categoriaSeleccionada + ":\n" + listar(productosFiltrados)
    }
}
function InicioDeSesion() {
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
            return true
        } else {
            alert("Usuario y/o contraseña incorrecto/s");
        }
    } while (contador < 3)
    return false

    if (contador === 3 && !inicioCorrecto) {
        alert("Agotaste tus intentos, volvé más tarde");

    }
}

function agregarProductoAlCarrito(productos, carrito) {
    let id = Number(prompt("Seleccione el producto por id:\n" + listar(productos)))
    let buscarProducto = productos.find(producto => producto.id === id)
    let productoAgregado = carrito.find(producto => producto.id === buscarProducto.id)
    if (buscarProducto.stock > 0) {
        if (productoAgregado) {
            productoAgregado.unidades++
            productoAgregado.subtotal = productoAgregado.unidades * productoAgregado.precioUnitario
        } else {
            carrito.push({
                id: buscarProducto.id,
                nombre: buscarProducto.nombre,
                precioUnitario: buscarProducto.precio,
                unidades: 1,
                subtotal: buscarProducto.precio,
            })
        }
        buscarProducto.stock--
        return "Se agregó producto al carrito"
    } else {
        return "No contamos con Stock de este producto en especifico"
    }
}
function ordenarProductos(productos, propiedad, esAscendente) {
    productos.sort((a, b) => {
        if (a[propiedad] < b[propiedad]) {
            return -1
        }
        if (a[propiedad] > b[propiedad]) {
            return 1
        }
        return 0
    })
    if (!esAscendente) {
        productos.reverse()
    }
    return productos
}
function finalizarCompra(carrito) {
    if (carrito.length === 0) {
        alert("Primero debe agregar productos al carrito");
    } else {
        let total = carrito.reduce((acum, producto) => acum + producto.subtotal, 0);
        let detalleCompra = "Su compra es:\n";

        for (const producto of carrito) {
            detalleCompra += producto.nombre + " - PRECIO USD " + producto.precioUnitario + " - CANTIDAD " + producto.unidades + "\n";
        }

        alert(detalleCompra + "El total a pagar es USD " + total);
        alert("Gracias por su compra");
    }
}



