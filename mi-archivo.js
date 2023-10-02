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

// principal(productos)
function principal(productos) {
    let carrito = []
    let opcion;
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
document.addEventListener('DOMContentLoaded', function () {
    const contenedorProductos = document.getElementById('contenedorProductos');

    productos.forEach(producto => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="./assets/img/${producto.imagen}" alt="${producto.nombre}">           
            <h3>${producto.nombre}</h3>
            <p>Precio: USD ${producto.precio}</p>
            <p>Stock: ${producto.stock}</p>
            <button onclick="agregarProductoAlCarrito(productos, carrito, ${producto.id})">Agregar al carrito</button>
        `;

        contenedorProductos.appendChild(card);
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const contenedorProductos = document.getElementById('contenedorProductos');
    const inputBusqueda = document.getElementById('inputBusqueda');
    const verCarritoBtn = document.getElementById('verCarritoBtn');
    const carritoContainer = document.getElementById('carrito');
    let carrito = [];

    function renderizarProductos(productos) {
        contenedorProductos.innerHTML = '';

        productos.forEach(producto => {
            const card = document.createElement('div');
            card.classList.add('card');

            card.innerHTML = `
                <img src="./assets/img/${producto.imagen}" alt="${producto.nombre}">           
                <h3>${producto.nombre}</h3>
                <p>Precio: USD ${producto.precio}</p>
                <p>Stock: ${producto.stock}</p>
                <button onclick="agregarProductoAlCarrito(${producto.id})">Agregar al carrito</button>
            `;

            contenedorProductos.appendChild(card);
        });
    }

    window.buscarProductos = function () {
        const busqueda = inputBusqueda.value.toLowerCase();
        const productosFiltrados = productos.filter(producto => producto.nombre.toLowerCase().includes(busqueda));
        renderizarProductos(productosFiltrados);
    };

    window.mostrarCarrito = function () {
        carritoContainer.innerHTML = '';
    
        if (carrito.length === 0) {
            carritoContainer.innerHTML = '<p>El carrito está vacío</p>';
        } else {
            carrito.forEach(producto => {
                const itemCarrito = document.createElement('div');
                itemCarrito.classList.add('carrito-item');
                itemCarrito.innerHTML = `
                    <p>${producto.nombre} - Cantidad: ${producto.unidades} - Subtotal: USD ${producto.subtotal}</p>
                `;
                carritoContainer.appendChild(itemCarrito);
            });
    
            const totalCarrito = document.createElement('p');
            totalCarrito.id = 'carritoTotal';
            totalCarrito.textContent = `Total: USD ${calcularTotalCarrito()}`;
            carritoContainer.appendChild(totalCarrito);
        }
    };
    
    function calcularTotalCarrito() {
        return carrito.reduce((total, producto) => total + producto.subtotal, 0).toFixed(2);
    }
    
    window.agregarProductoAlCarrito = function (id) {
        const producto = productos.find(p => p.id === id);
        if (producto.stock > 0) {
            const carritoIndex = carrito.findIndex(item => item.id === id);
            if (carritoIndex !== -1) {
                carrito[carritoIndex].unidades++;
                carrito[carritoIndex].subtotal = carrito[carritoIndex].unidades * carrito[carritoIndex].precioUnitario;
            } else {
                carrito.push({
                    id: producto.id,
                    nombre: producto.nombre,
                    precioUnitario: producto.precio,
                    unidades: 1,
                    subtotal: producto.precio,
                });
            }
            producto.stock--;
            mostrarCarrito();
        } else {
            alert('No contamos con stock de este producto en específico');
        }
    };

    // Resto de tu código...

    // Llama a la función para renderizar los productos al cargar la página
    renderizarProductos(productos);
});
