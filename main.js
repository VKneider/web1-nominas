var contenedor = document.getElementById("contenedor");

var empleados = [
  {
    nombre: "armando",
    apellido: "casas",
    urb: "lago country 3",
    postal: "4004",
    cargo: "vendedor",
    cedula: "V30167855",
    conceptos: [0, 1, 2],
  },

];


var salarios = {

  vendedor: 100,
  manager: 150,
  propietario: 200,
  obrero: 50

}


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

    var keys = Object.keys(empleados[1]);
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