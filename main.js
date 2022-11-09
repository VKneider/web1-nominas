
//Elementos HTML
var contenedor = document.getElementById("contenedor");
const insert_empleado = document.querySelector('#insert-empleado');
const insert_concepto = document.querySelector('#insert-concepto');
const modal_insert_empleado = document.querySelector('#modal-insert-empleado');
const modal_insert_concepto = document.querySelector('#modal-insert-concepto');
const close_insert_empleado = document.querySelector('#close-insert-empleado');
const close_insert_concepto = document.querySelector('#close-insert-concepto');


let select_salario = document.getElementById("select-salario");
let radioPorcentaje = document.getElementById("radio-porcentaje")
let radioMonto = document.getElementById("radio-neto")


let card1= document.getElementById("card1");
let card2= document.getElementById("card2");


let close_asignar_concepto = document.getElementById('close-asignar-concepto');
let modal_asignar_concepto = document.getElementById('modal-asignar-concepto')
let btn_asignar_concepto = document.getElementById('asignar-concepto');



//Eventos
insert_empleado.addEventListener("click",()=>{
  modal_insert_empleado.showModal();
});
insert_concepto.addEventListener("click",()=>{
  modal_insert_concepto.showModal();
});

close_insert_empleado.addEventListener("click", ()=>{
  modal_insert_empleado.close();
});

close_insert_concepto.addEventListener("click", ()=>{
  modal_insert_concepto.close();
});

btn_asignar_concepto.addEventListener("click", () => {
  modal_asignar_concepto.showModal();
})

close_asignar_concepto.addEventListener("click", ()=>{
  modal_asignar_concepto.close();
});




function radioChecks(){

  
  if(radioMonto.checked){
    card2.classList.remove("block")
    card1.classList.remove("background")
    card1.classList.add("block")
    card2.classList.add("background")
  }
  
  if(radioPorcentaje.checked){
    card1.classList.remove("block")
    card2.classList.remove("background")
    card2.classList.add("block")
    card1.classList.add("background")
  }

}

radioMonto.addEventListener('change', radioChecks)
radioPorcentaje.addEventListener('change', radioChecks)

//JSON

var empleados = [
  {
    nombres: "armando",
    apellidos: "casas",
    urb: "lago country 3",
    postal: "4004",
    cargo: "vendedor",
    cedula: "V30167855",
    conceptos: [0, 1, 2],
  },

  {
    nombres: "francisco",
    apellidos: "mendoza",
    urb: "edificios pallium",
    postal: "4004",
    cargo: "bobo",
    cedula: "V30167855",
    conceptos: [0, 1, 2]
  }

];

let formulario = document.getElementById('formulario')


let fnsend = function(event){

  let empleado  = {
    nombre: formulario.Nombres.value,
    apellido: formulario.Apellidos.value,
    urb: formulario.Urbanizacion.value,
    cargo: formulario.cargo-empleado.value,
    cedula: formulario.Cedula.value,
  }
  empleados.push(empleado)
  alert("El empleado ha sido agregado exitosamente")
  console.log(empleados)
  event.preventDefault()
}
formulario.addEventListener("submit", fnsend)







var salarios = {

  vendedor: 100,
  manager: 150,
  propietario: 200,
  obrero: 50,
  pasante:0
}

let textCargo = ""
let textSalario =""
let selectCargo = document.getElementById("cargo-empleado")

for (const salario in salarios) {
  textCargo += `<option value="${salario}"> ${salario} </option>`
}

for (const salario in salarios) {
  textSalario += `<option value="${salario}"> ${salario}:${salarios[salario]} </option>`
}

selectCargo.innerHTML = textCargo;
select_salario.innerHTML = textSalario;




var conceptos = [
  {
    id: 0,
    descripcion: "Salario Semanal Vendedor",
    tipo: "Aporte",
    monto: salarios['vendedor']
  },
  {
    id: 1,
    descripcion: "Salario Semanal Manager",
    tipo: "Aporte",
    monto: salarios['manager']
  },
  {
    id: 2,
    descripcion: "Salario Semanal Propietario",
    tipo: "Aporte",
    monto: salarios['propietario']
  },
  {
    id: 3,
    descripcion: "Inasistencia 1 día Vendedor",
    tipo: "Sanción",
    monto: salarios['vendedor'] / 7
  },
  {
    id: 4,
    descripcion: "Inasistencia 1 día Manager",
    tipo: "Sanción",
    monto: salarios['manager'] / 7
  },
  {
    id: 5,
    descripcion: "Inasistencia 1 día Propietario",
    tipo: "Sanción",
    monto: salarios['propietario'] / 7
  },
  {
    id: 6,
    descripcion: "Inasistencia 1 día Obrero",
    tipo: "Sanción",
    monto: salarios['obrero'] / 7
  },
  {
    id: 7,
    descripcion: "Salario semanal obrero",
    tipo: "Aporte",
    monto: salarios['obrero']
  }
  
  
]


function crearConcepto(descripcion, tipo, monto) {
  
  let concepto = {
    id: conceptos.length,
    descripcion: descripcion,
    tipo: tipo,
    monto: monto
  }
  
  return conceptos.push(concepto)
}


function crearEmpleado(nombre, apellido, urb, postal, cargo, cedula) {
  
  return empleados.push({
    nombre: nombre,
    apellido: apellido,
    urb: urb,
    postal: postal,
    cargo: cargo,
    cedula: cedula
    
  })

}



function generarTabla() {
  
  try {

    var keys = Object.keys(empleados[0]);
    var filas = empleados.length;
    var columnas = keys.length;
    contenedor.innerHTML = "";
    var tabla = "<table>";
    
    tabla += "<tr>";
    for (let k = 0; k < keys.length; k++) {
      tabla += "<th>" + keys[k] + "</th>";
    }
    tabla += "</tr>";
    
    for (let i = 0; i < filas; i++) {
      tabla += "<tr>";
      
      for (let j = 0; j < columnas; j++) {
        tabla += "<td>" + empleados[i][keys[j]] + "</td> ";
      }

      tabla += "</tr>";
    }
    tabla += "</table>";
    contenedor.innerHTML = tabla;
  } catch (error) { }
}


const t = document.querySelector('.toggle');

t.addEventListener('click', () => {
  t.classList.toggle('is-active')
})



function verifyCedula(cedula) {

  for (let i = 0; i < empleados.length; i++) {
    if (cedula == empleados[i].cedula) { return true }
  }

  return false;

}

function findEmpleado(cedula) {

  for (let i = 0; i < empleados.length; i++) {
    if (cedula == empleados[i].cedula) { return i }
  }

  return false;
}

function asignarConcepto(cedula, concepto) {

  return empleados[findEmpleado(cedula)].conceptos.push(concepto);

}

