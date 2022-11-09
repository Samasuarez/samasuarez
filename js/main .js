// let nombreCompleto = prompt("ingresa tu nombre");
// let Saludo = alert("Hola!" + nombreCompleto);
let edad = "18";
const ingresoEdad = function () {
  prompt("Ingresa tu edad");
  if (ingresoEdad >= edad) {
    alert("Bienvenido, sitio solo para adultos");
  } else {
    alert("No cuentas con la edad suficiente");
  }
};
// ingresoEdad()
const servicios = [
  {
    id: 1,
    nombre: "higiene y confort",
    cuidado: "enfermeria/auxiliar",
    precio: 3000,
  },
  {
    id: 2,
    nombre: "cambio de sonda vesical",
    cuidado: "enfermeria/auxiliar",
    precio: 4000,
  },
  {
    id: 3,
    nombre: "acompañamiento terapeutico",
    cuidado: "acompañante terapeutico",
    precio: 800,
  },
  {
    id: 4,
    nombre: "control de signos vitales",
    cuidado: "enfermeria/auxiliar",
    precio: 2000,
  },
  {
    id: 5,
    nombre: "limpieza y curacion de escaras",
    cuidado: "enfermeria/auxiliar",
    precio: 1000,
  },
];
function servicio(id, nombre, cuidado, precio) {
  this.id = id;
  this.nombre = nombre;
  this.cuidado = cuidado;
  this.precio = precio;
}
const nuevoServicio = new servicio(
  6,
  "via de hidratacion",
  "enfermeria/auxiliar",
  2500
);

function cargarServicio(arr, valor) {
  arr.push(valor);
}
cargarServicio(servicios, nuevoServicio);
// console.log(nuevoServicio);
console.log(servicios);

function buscarServicio(arr, filtro) {
  const encontrado = arr.find((servicio) => {
    return servicio.nombre.includes(filtro);
  });
  return encontrado;
}

function buscarPorCuidado(arr, filtro) {
  const encontro = arr.find((servicio) => {
    return servicio.cuidado.includes(filtro);
  });
  return encontro;
}

// console.log(cuidadoEncontrado)
// console.log(servicioEncontrado);
let filtrarPorPrecio = (arr, filtro) =>
 arr.filter((servicio) => servicio.precio <= filtro);

const menorPrecio = filtrarPorPrecio(servicios, 1000);
console.log(menorPrecio);
const compras = [];
let servicioEncontrado = buscarServicio(servicios, "via de hidratacion");
let cuidadoEncontrado = buscarPorCuidado(servicios, "acomp");
cargarServicio(compras, servicioEncontrado);
cargarServicio(compras, cuidadoEncontrado);
console.log(compras);
// function calcularPrecio(acc, el) {
//   return compras.reduce;
// }
// function calcularPrecio
let calcularPrecio = compras.reduce((acc, el) => {
  return acc + el.precio;
}, 0);
console.log(calcularPrecio);


// let calculaPrecio = (datos) =>
//   datos.reduce((acc, el) => {
//     return acc + el.precio;
//   }, 0);
// console.log(calculaPrecio(compras));
// let calculaPrecio2 = (datos) => {
//   return datos.reduce((acc, el) => {
//     return acc + el.precio;
//   }, 0);
// };

// const filtra = (arr, filtro,param)=>{
//   return arr.filter
// }

// console.log(nuevoServicio)

// let numeroDeTelefono = "1546164729";

// function login() {
//   let ingresar = false;
//   for (let i = 10; i <= 10; i--) {
//     let userCel = prompt("Ingresa tu numero de telefono");
//     if (userCel === numeroDeTelefono) {
//       alert("Bienvenido/a Ingreso exitoso");
//       ingresar = true;
//       break;
//     } else {
//       alert(
//         "Error, no encontramos este numero registrado, vuelve a intentarlo"
//       );
//     }
//   }
//   return ingresar;
// }
// let logueo = login();
// console.log(logueo);
// const promptInt = function (consulta) {
//   return parseInt(prompt(consulta));
// };
// function pedirMientrasQueTengaValor(consulta) {
//   let valor = prompt(consulta);
//   while (!valor && valor.length === 0) {
//     valor = promptInt("No ingresaste un valor valido, intenta nuevamente");
//   }
//   return valor;
// }
// const cambiarDePlan = function () {
//   let cambioPlan = prompt("Elegi tu nuevo plan (8gb, 15gb, 25gb)").toLowerCase();
//   while (cambioPlan != "8gb" && cambioPlan != "15gb" && cambioPlan != "25gb") {
//     cambioPlan = prompt("Por favor elige una opcion valida (8gb, 15gb, 25gb)").toLowerCase();
//   }
//   console.log(cambioPlan);
//   if (cambioPlan) {
//     alert("cambiaste tu plan a: " + cambioPlan);
//   }
// };

// const ingresarPagoWhile = function () {
//   let medioPago = prompt(
//     "Elegi un metodo de pago (debito, credito o transferencia)"
//   );
//   while (
//     medioPago === "credito" &&
//     medioPago === "debito" &&
//     medioPago === "transferencia"
//   ) {
//     alert("Por favor ingresa un metodo de pago valido" + medioPago);
//     prompt("Elegi un metodo de pago (debito, credito o transferencia)");
//   }
//   if (medioPago !== "transferencia") {
//     let nombreCompleto = prompt("Ingresar nombre completo");
//     let numeroTarjeta = promptInt("Ingresar numero de tarjeta");
//     let monto = promptInt("Ingresar monto a abonar");
//     alert(
//       "Emisor: " +
//         nombreCompleto +
//         "\nTarjeta: " +
//         numeroTarjeta +
//         "\nmonto $: " +
//         monto
//     );
//   } else {
//     alert("Este es nuestro CBU: 1537984958776594504387348");
//   }
// };

// if (logueo) {
//   let saldo = 345;
//   let deuda = 365;
//   let opcion = prompt(
//     "Elegí una opción: \n1- Realizar un pago. \n2 -Cosultar mi saldo. \n3 -consultar deuda. \n4-cambiar mi plan. \n5-Finalizar "
//   );

//   while (opcion != "5" && opcion != "5") {
//     switch (opcion) {
//       case "1":
//         ingresarPagoWhile();
//         break;
//       case "2":
//         alert("Tu saldo es de $" + saldo);
//         break;
//       case "3":
//         alert("Tu deuda actual es de $" + deuda);
//         break;
//       case "4":
//         cambiarDePlan();
//         break;

//       default:
//         alert("Opción no válida");
//         break;
//     }
//     opcion = prompt(
//       "Elegí una opción: \n1- Realizar un pago. \n2 - Cosultar mi saldo. \n3 -consultar deuda. \n4-cambiar mi plan. \n5-Finalizar "
//     );
//   }
// } else {
//   alert("Fin");
// }
