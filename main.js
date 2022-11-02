var contenedor = document.getElementById("contenedor");



async function generarTabla() {
  //var numFilas = document.getElementById("numFilas").value;
  //var numColumnas = document.getElementById("numColumnas").value;

  try {
    
    let reqData = await fetch("empleados.json");
    let data = await reqData.json();

    var keys = Object.keys(data[1]);
    var filas = data.length;
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
        tabla += "<td>" + data[i][keys[j]] + "</td> ";
      }

      tabla += "</tr>";
    }
    tabla += "</table>";
    contenedor.innerHTML = tabla;
  } catch (error) {}
}


const t=document.querySelector('.toggle');

t.addEventListener('click', () =>{
    t.classList.toggle('is-active')
})