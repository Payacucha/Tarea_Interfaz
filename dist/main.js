"use strict";
//Vehiculos Terrestres
class Camioneta {
    conducir() {
        console.log("La camioneta esta conduciendo");
    }
    ;
    encender() {
        console.log("La camioneta esta ecendida");
    }
    ;
    detener() {
        console.log("La camioneta esta detenido");
    }
    ;
    acelerar() {
        console.log("La camioneta esta acelerando");
    }
    ;
    constructor(modelo, fabricante, numeroLlantas, placa) {
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.numeroLlantas = numeroLlantas;
        this.placa = placa;
    }
}
function procesar(vehiculo) {
    vehiculo.encender();
    vehiculo.detener();
    vehiculo.conducir();
    vehiculo.acelerar();
}
let camioneta = new Camioneta("4x2", "Casa Vaca", 4, 5312);
console.log(" – Inicio de Vehiculos Terrestres");
console.log("** CAMIONETA **");
console.log("> Propiedades de la clase Camioneta");
console.log("El modelo de la camioneta es: ", camioneta.modelo);
console.log("El fabricante es:", camioneta.fabricante);
console.log("Tiene un numero de llantas", camioneta.numeroLlantas);
console.log("La placa de la camioneta es", camioneta.placa);
console.log("> Metodo en la interfaz Vehiculo Terrestre");
camioneta.conducir();
camioneta.encender();
camioneta.detener();
camioneta.acelerar();
class Camion {
    conducir() {
        console.log("El camion esta siendo conducido");
    }
    encender() {
        console.log("El camion esta encendido");
    }
    detener() {
        console.log("El camion esta detenido");
    }
    acelerar() {
        console.log("El camion esta acelerando");
    }
    constructor(modelo, fabricante, numeroLlantas, año) {
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.numeroLlantas = numeroLlantas;
        this.año = año;
    }
}
function andar(camion) {
    camion.encender();
    camion.detener();
    camion.conducir();
    camion.acelerar();
}
let camion2 = new Camion("NLR 511 EIV", "Chevorlet", 6, 2022);
console.log("** CAMION **");
console.log("> Propiedades de la clase camion");
console.log("El modelo del camion es:", camion2.modelo);
console.log("El fabricante del camion es:", camion2.fabricante);
console.log("El numero de llantas es:", camion2.numeroLlantas);
console.log("El año de la camioneta es:", camion2.año);
console.log("> Metodo en la interfaz Vehiculo Terrestre");
camion2.conducir();
camion2.encender();
camion2.detener();
camion2.acelerar();
class Automovil {
    conducir() {
        console.log("El automovil esta siendo conducido");
    }
    ;
    encender() {
        console.log("El automovil esta encendido");
    }
    ;
    detener() {
        console.log("El automovil esta detenido");
    }
    ;
    acelerar() {
        console.log("El automovil esta acelerando");
    }
    ;
    constructor(modelo, fabricante, numeroLlantas) {
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.numeroLlantas = numeroLlantas;
    }
}
function conducir(carro) {
    carro.encender();
    carro.detener();
    carro.conducir();
    carro.acelerar();
}
let carro = new Automovil("Ford Mustang", "Ford", 4);
console.log("** Automovil **");
console.log("> Propiedades de la clase automovil");
console.log("El modelo del vehiculo es:", carro.modelo);
console.log("El fabricante del vehiculo es:", carro.fabricante);
console.log("El numero de llantas del vehiculo es:", carro.numeroLlantas);
console.log("> Metodo en la interfaz de Vehiculo Terrestre");
carro.conducir();
carro.encender();
carro.detener();
carro.acelerar();
console.log(" - Fin de Vehiculos Terrestres");
// Vehiculos Maritimos
class Submarino {
    navegar() {
        console.log("Este submarino esta navegando");
    }
    ;
    encender() {
        console.log("Este submarino esta encendido");
    }
    ;
    detener() {
        console.log("Este submarino esta detenido");
    }
    ;
    acelerar() {
        console.log("Este submarino esta acelerando");
    }
    ;
    constructor(modelo, fabricante, numeroTurbinas) {
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.numeroTurbinas = numeroTurbinas;
    }
}
function embarcar(sub) {
    sub.encender();
    sub.detener();
    sub.navegar();
    sub.acelerar();
}
let subma = new Submarino("tipo 214", "Howaldtswerke", 4);
console.log(" - Inicio Vehiculos Maritimos");
console.log(" ** SUBMARINO **");
console.log("> Propiedades de la clase Submarino");
console.log("El fabricante del submarino es:", subma.fabricante);
console.log("El modelo del submarino es:", subma.modelo);
console.log("Su numero de turbinas es:", subma.numeroTurbinas);
console.log("> Metodo en la interfaz Vehiculo Maritimo");
subma.navegar();
subma.encender();
subma.detener();
subma.acelerar();
class Barco {
    navegar() {
        console.log("Este barco esta navegando");
    }
    encender() {
        console.log("Este barco esta encendido");
    }
    detener() {
        console.log("Este barco esta detenido");
    }
    acelerar() {
        console.log("Este barco esta acelerado");
    }
    constructor(modelo, fabricante, numeroTurbinas) {
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.numeroTurbinas = numeroTurbinas;
    }
}
function barco(barco1) {
    barco1.encender();
    barco1.detener();
    barco1.navegar();
    barco1.acelerar();
}
let barc = new Barco("Carabela.", "españoles", 2);
console.log(" ** BARCO **");
console.log("> Propiedades de la clase Barco");
console.log("El modelo del barco es:", barc.modelo);
console.log("El fabricante del barco es:", barc.fabricante);
console.log("El numero de turbinas en el barco es:", barc.numeroTurbinas);
console.log("> Metodo en la interfaz Vehiculo Maritimo");
barc.navegar();
barc.encender();
barc.detener();
barc.acelerar();
class Yate {
    navegar() {
        console.log("Este yate esta navegando");
    }
    encender() {
        console.log("Este yate esta encendido");
    }
    detener() {
        console.log("Este yate esta detenido");
    }
    acelerar() {
        console.log("Este yate esta acelerado");
    }
    constructor(modelo, fabricante, numeroTurbinas) {
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.numeroTurbinas = numeroTurbinas;
    }
}
function YateA(yate) {
    yate.navegar();
    yate.encender();
    yate.detener();
    yate.detener();
}
let yete = new Yate("Azzam", "Jalifa bin", 0);
console.log(" ** YATE **");
console.log("> Propiedades de la clase Yate");
console.log("El modelo del yate es:", yete.modelo);
console.log("El fabricante del yate es:", yete.fabricante);
console.log("El numero de turbinas en el yate es:", yete.numeroTurbinas);
console.log("> Metodo en la interfaz Vehiculo Maritimo");
yete.navegar();
yete.encender();
yete.detener();
yete.acelerar();
console.log(" - Fin de Vehiculos Maritimos");
// Vehiculos Aereos
class Helicoptero {
    encender() {
        console.log("El Helicoptero esta encendido");
    }
    ;
    volar() {
        console.log("El Helicoptero esta volando");
    }
    ;
    detener() {
        console.log("El Helicoptero esta detenido en el aire");
    }
    ;
    acelerar() {
        console.log("El Helicoptero esta acelerando");
    }
    ;
    constructor(modelo, fabricante, numeroHelices) {
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.numeroHelices = numeroHelices;
    }
}
function volar(bird) {
    bird.encender();
    bird.volar();
    bird.detener();
    bird.acelerar();
}
let avionA = new Helicoptero("MD-80", "Maddog'", 6);
console.log(" - Inicio de Vehiculos Aereos");
console.log(" ** Helicoptero **");
console.log("> Propiedades de la clase Helicoptero");
console.log("El fabricante es:", avionA.fabricante);
console.log("El modelo del helicoptero es: ", avionA.modelo);
console.log("Su numero de helices es", avionA.numeroHelices);
console.log("> Metodo en la interfaz Vehiculo Aereo");
avionA.encender();
avionA.volar();
avionA.detener();
avionA.acelerar();
class Avion {
    encender() {
        console.log("El avion esta encendido");
    }
    ;
    volar() {
        console.log("El avion esta volando");
    }
    ;
    detener() {
        console.log("El avion esta detenido en el aire");
    }
    ;
    acelerar() {
        console.log("El avion esta acelerando");
    }
    ;
    constructor(modelo, fabricante, numeroHelices) {
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.numeroHelices = numeroHelices;
    }
}
function planear(avion) {
    avion.encender();
    avion.volar();
    avion.detener();
    avion.acelerar();
}
let avion = new Avion("Cessna", "Cessna 172 Skyhawk", 4);
console.log(" ** Avion **");
console.log("> Propiedades de la clase Avion");
console.log("El fabricante es:", avion.fabricante);
console.log("El modelo del avion es: ", avion.modelo);
console.log("Su numero de helices es", avion.numeroHelices);
console.log("> Metodo en la interfaz Vehiculo Aereo");
avion.encender();
avion.volar();
avion.detener();
avion.acelerar();
class Avioneta {
    encender() {
        console.log("La avioneta esta encendido");
    }
    ;
    volar() {
        console.log("La avioneta esta volando");
    }
    ;
    detener() {
        console.log("La avioneta esta detenido en el aire");
    }
    ;
    acelerar() {
        console.log("La avioneta esta acelerando");
    }
    ;
    constructor(modelo, fabricante, numeroHelices) {
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.numeroHelices = numeroHelices;
    }
}
function Avi(avioneta) {
    avioneta.encender();
    avioneta.volar();
    avioneta.detener();
    avioneta.acelerar();
}
let avionetaA = new Avioneta("Learjet", "Learjet 45XR", 4);
console.log(" ** Avioneta **");
console.log("> Propiedades de la clase Avioneta");
console.log("El fabricante es:", avionetaA.fabricante);
console.log("El modelo del avion es: ", avionetaA.modelo);
console.log("Su numero de helices es", avionetaA.numeroHelices);
console.log("> Metodo en la interfaz Vehiculo Aereo");
avionetaA.encender();
avionetaA.volar();
avionetaA.detener();
avionetaA.acelerar();
