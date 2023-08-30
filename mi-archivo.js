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
    if(inicioCorrecto){
        menuPrincipal();
    }
    
} 

function menuPrincipal() {
    let opcionIngresda;
    do {
        opcionIngresda = prompt("Ingrese:\n1 para tienda de celulares iPhone\n2 para ingresar a la tienda de PCs y tablets\n3 para tienda de accesorios\n4 para salir");
        switch (opcionIngresda) {
            case "1":
                alert("Elegiste la tienda de compra de celulares");
                mostrarCelulares();
                break;
            case "2":
                alert("Elegiste la tienda de compra de equipos o tablets");
                mostrarEquYTablets();
                break;
            case "3":
                alert("Ingresaste a la tienda de accesorios");
                mostrarAccesorios();
                break;
            case "4":
                alert("Esperamos verte pronto otra vez por nuestras tiendas");
                break;
            default:
                alert("No ingresaste una opción válida");
        }
    } while (opcionIngresda !== "4");
}

function mostrarCelulares() {
    let opcion;
    let total = 0;
    let mensaje =
        "Ingrese qué producto desea comprar:\n1- Comprar IPHONE 14 PRO MAX USD 2000,\n2- Comprar IPHONE 14 USD 1500,\n3- IPHONE 13 PRO MAX USD 1200,\n4- Finalizar compra / salir";

    do {
        opcion = Number(prompt(mensaje));
        switch (opcion) {
            case 1:
                alert('Se agregó un IPHONE 14 PRO MAX al carrito');
                total += 2000;
                break;
            case 2:
                alert('Se agregó un IPHONE 14 al carrito');
                total += 1500;
                break;
            case 3:
                alert('Se agregó un IPHONE 13 PRO MAX al carrito');
                total += 1200;
                break;
            case 4:
                let finalizar = prompt("¿Desea finalizar la compra? si/no").toLowerCase();
                if (finalizar === "no") {
                    total = 0;
                    alert("Puedes seguir con tu compra");
                } else if (finalizar === "si") {
                    alert("El total a pagar es USD " + total);
                }
                break;
            default:
                alert("Opción inválida. Por favor, elija una opción válida.");
        }
    } while (opcion !== 4);
}
    

function mostrarEquYTablets() {
    let opcion;
    let total = 0;
    let mensaje =
        "Ingrese qué producto desea comprar:\n1- Comprar APPLE iPAD 8va USD 1350,\n2- Comprar APPLE iPad 10ma generacion USD 1500,\n3- Comprar MacBook Air PRO USD 3500,\n4- Finalizar compra / salir";

    do {
        opcion = Number(prompt(mensaje));
        switch (opcion) {
            case 1:
                alert('Se agregó una APPLE iPAD 8va generacion al carrito');
                total += 1350;
                break;
            case 2:
                alert('Se agregó una APPLE iPad 10ma generacion al carrito');
                total += 1500;
                break;
            case 3:
                alert('Se agregó un MacBook Air PRO al carrito');
                total += 3500;
                break;
            case 4:
                let finalizar = prompt("Desea finalizar la compra? Si o No").toLowerCase();
                if (finalizar === "si") {
                    alert("El total a pagar es USD " + total);
                } else if (finalizar === "no") {
                    total = 0;
                    alert("Puedes seguir con tu compra");
                }
                break;
            default:
                alert("Opción inválida. Por favor, elija una opción válida.");
        }
    } while (opcion !== 4);
}

function mostrarAccesorios() {
    let opcion;
    let total = 0;
    let mensaje =
        "Ingrese qué producto desea comprar:\n1- Comprar APPLE AIRPODS MAX USD 800,\n2- Comprar APPLE MAG SAFE USD 100,\n3- Comprar Smart KeyBoard PRO USD 950,\n4- Finalizar compra / salir";

    do {
        opcion = Number(prompt(mensaje));
        switch (opcion) {
            case 1:
                alert('Se agregó un APPLE AIRPODS MAX al carrito');
                total += 800;
                break;
            case 2:
                alert('Se agregó una funda APPLE MAG SAFE al carrito');
                total += 100;
                break;
            case 3:
                alert('Se agregó un Smart KeyBoard PRO al carrito');
                total += 950;
                break;
            case 4:
                let finalizar = prompt("Desea finalizar la compra? Si o No").toLowerCase();
                if (finalizar === "si") {
                    alert("El total a pagar es USD " + total);
                } else if (finalizar === "no") {
                    total = 0;
                    alert("Puedes seguir con tu compra");
                }
                break;
            default:
                alert("Opción inválida. Por favor, elija una opción válida.");
        }
    } while (opcion !== 4);
}


InicioDeSesion();
alert("Te encuentras en la sección previa a la tienda de ventas donde encontrarás todos nuestros productos. Presiona ENTER para que te redirijamos a la elección de los productos");
menuPrincipal();
