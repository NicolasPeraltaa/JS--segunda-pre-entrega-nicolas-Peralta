function InicioDeSesion (){
    alert("Bienvenido a iPlace, la tienda oficial de venta de productos Apple en Uruguay! Por favor, pulsa ENTER para continuar al inicio de sesion.")

    // INICIO DE SESION
    let usuarioBD = "Nico123"
    let contraseniaBD = "Nico123456"
    let contador = 0
    let inicioCorrecto = false
    do {
        usuario = prompt("Ingrese usuario")
        contrasenia = prompt("Ingrese contraseña")
        contador++
    
        if (usuario === usuarioBD && contrasenia === contraseniaBD) {
            alert("Bienvenido " + usuario)
            inicioCorrecto = true
            break;
        } else {
            alert("Usuario y/o contraseña incorrecto/s")
        }
    } while (contador < 3)
    
    if (contador === 3 && !inicioCorrecto) {
        alert("Agotaste tus intentos, volvé más tarde")
    
    }
    
} 

InicioDeSesion ();

alert("Te encuentras en la seccion previa a la tienda de ventas donde econtraras todos nuestros productos. Apreta ENTER para que te redireccionemos a la eleccion de los productos")

let opcionIngresda = prompt("Ingrese n/1 para tienda de celulares Iphone, ingrese n/2 para ingresar a la tienda de Pc's y tablets, ingrese n/3 para tienda de accesorios, n/4 para salir")
switch (opcionIngresda) {
    case "1":
        alert("Elegiste la tienda de compra de celulares")
        break;
    case "2":
        alert("Elegiste la tienda de compra de equipos o tablets")
        break;
    case "3":
        alert("Ingresaste a la tienda de accesorios")
        break;
    case "4":
        alert("Esperamos verte pronto otra vez por nuestras tiendas")
    default:
        break;
}

// A continuacion depende de la tienda que eligiera el cliente saldria una diferente tienda en pantalla, como no tengo la posibilidad de hacerlo ahora. Por lo cual voy a representar la tienda en una sola tienda en comun.




// CARRITO DE COMPRA
let opcion;
let total = 0;
let mensaje =
    'Ingrese que producto desea comprar n/1- Comprar IPHONE 14PRO MAX USD 2000, n/2- Comprar IPHONE 14 USD 1500, n/3- IPHONE 13 PRO MAX USD 1200, n/4- PC TORRE APPLE GAMA ALTA USD 4500, n/5- APPLE AIR PODS gen4 USD 400, n/6- Finalizar compra / salir';
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
            alert('Se agregó el articulo PC GAMA ALTA APPLE al carrito');
            total += 4500;
            break;
        case 5:
            alert('Se agregó el articulo airpods gen 4 al carrito');
            total += 400;
            break;
        case 6:
            let finalizar = prompt("Desea finalizar la compra? Si o No").toLowerCase()
if (finalizar === "si"){
    break;
} else { (finalizar === "no")
    total = 0
    alert("Puedes seguir con tu compra")
    break;
}
    }
} while (opcion !== 6);
alert('El total a pagar es USD' + total); 


