class Coche{

    constructor(modelo, velocidad, antiguedad){
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.antiguedad = antiguedad;

    }

    aumentarVelocidad(){
        this.velocidad += 1;
    }

    reducirVelocidad(){
        this.velocidad -= 1;
    }
}

//Herencia
class Autobus extends Coche{
    constructor(modelo, velocidad, antiguedad){
        super(modelo, velocidad, antiguedad);
        this.altura = 5;
    }

    mostrarAltura(){
        return "La altura del bus es: "+this.altura;
    }

}

var autobus1 = new Autobus('Pegasus', 300, 2005);
console.log(autobus1.mostrarAltura());

var coche1 = new Coche('BMW', 200, 2017);
var coche2 = new Coche('Mercedes', 220, 2019);
var coche3 = new Coche('Audi', 180, 2015);

//console.log(coche1);
document.write("<h1>Velocidad: "+coche1.velocidad+"<h1>")
coche1.aumentarVelocidad();
document.write("<h1>Velocidad: "+coche1.velocidad+"<h1>")