/*
Variables en JS
*/
var nombre = "Juanma Pereyra";
var altura = 189;

/*
var concatenacion = nombre + " " + altura;

var datos = document.getElementById("datos");
datos.innerHTML = `
<h1>Soy la caja de datos</h1>
<h2>Mi nombre es: ${nombre}</h2>
<h3>Mido: ${altura}</h3>
`;
//document.write(nombre);

//Estructura de contro -->

if(altura>=190){
    datos.innerHTML += '<h1>Eres una persona ALTA</h1>';
}else{
    datos.innerHTML += '<h1>Eres una persona BAJITA</h1>';
}

//Ciclos

for(var i = 2000; i <= 2020; i++){
    //bloque de instrucciones 
    datos.innerHTML += "<h2>Estamos en el año"+i;
}
*/
//Funciones

function MuestraMiNombre(nombre, altura){
    var misDatos = `
        <h1>Soy la caja de datos</h1>
        <h2>Mi nombre es: ${nombre}</h2>
        <h3>Mido: ${altura}</h3>
    `;

    return misDatos;
}

function imprimir(){
    var datos = document.getElementById("datos");
    datos.innerHTML = MuestraMiNombre("Juanman", 185);
}

imprimir();

//Arrays

var nombres = ['Juan', 'Manuel', 'Loquesea'];

document.write('<h1>Listado de nombres</h1>');
/*
for( i = 0; i< nombres.length; i++){
    document.write(nombres[i] + '</br>');
}

nombres.forEach(function(nombre) {
    document.write(nombre + '</br>');
});
*/

//Funciones de callback =>
nombres.forEach((nombre) => {
    document.write(nombre + '</br>');
});


//Objeto Js literales-JSON
var coche = {
    modelo: 'Mercedes Class',
    maxima: 500,
    antiguedad: 2020,
    mostrarDatos(){
        console.log(this.modelo, this.maxima, this.antiguedad);
    },
    propiedad1: "Valor aleatorio"
};

document.write("<h1>"+coche.modelo+"</h1>");
coche.mostrarDatos()

//Promesas
var saludar = new Promise((resolve, reject)=>{
    
    setTimeout(() => {
        let saludo = "Buenas tardes bro!"
        //saludo = false;

        if (saludo){
            resolve(saludo);
        }else{
            reject('No hay saludo');
        }

    }, 2000);
    
});

saludar.then(resultado => {

    alert(resultado);

})
.catch(err => {
    alert(err);
});