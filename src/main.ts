interface IVehiculo{
    readonly modelo     : string;
    readonly fabricante : string;
    encender()          : void;
    detener()           : void;
    acelerar()          : void;
}
interface VehiculoTerrestre extends IVehiculo{
    numeroLlantas   : number;
    conducir()      : void;
}
interface VehiculoMaritimo extends IVehiculo{
    numeroTurbinas  : number;
    navegar()       : void;
}
interface VehiculoAereo extends IVehiculo{
    numeroHelices   : number;
    volar()         : void;
}
//Vehiculos Terrestres
class Camioneta implements VehiculoTerrestre{
    modelo          : string;
    fabricante      : string;
    numeroLlantas   : number;
    placa           : number;
    
    conducir(): void {
        console.log("La camioneta esta conduciendo")
    };
    encender(): void { 
        console.log("La camioneta esta ecendida")
    };
    detener(): void {
        console.log("La camioneta esta detenido")
    };
    acelerar(): void{
        console.log("La camioneta esta acelerando")
    };
    constructor(modelo:string,fabricante:string,numeroLlantas:number, placa:number){
        this.modelo         = modelo;
        this.fabricante     = fabricante;
        this.numeroLlantas  = numeroLlantas;
        this.placa          = placa;
    }

}
function procesar (vehiculo:VehiculoTerrestre){
    vehiculo.encender();
    vehiculo.detener();
    vehiculo.conducir();
    vehiculo.acelerar();
} 

let camioneta = new Camioneta("4x2", "Casa Vaca", 4, 5312)
    console.log(" – Inicio de Vehiculos Terrestres")
    console.log("** CAMIONETA **")
    console.log("> Propiedades de la clase Camioneta")
    console.log("El modelo de la camioneta es: ", camioneta.modelo);
    console.log("El fabricante es:", camioneta.fabricante);
    console.log("Tiene un numero de llantas", camioneta.numeroLlantas);
    console.log("La placa de la camioneta es", camioneta.placa);
    console.log("> Metodo en la interfaz Vehiculo Terrestre")
    camioneta.conducir();
    camioneta.encender();
    camioneta.detener();
    camioneta.acelerar();

class Camion  implements VehiculoTerrestre{
    modelo          : string;
    fabricante      : string;
    numeroLlantas   : number;
    año             : number;

    conducir (): void {
        console.log("El camion esta siendo conducido")
    }
    encender(): void {
        console.log("El camion esta encendido")
    }
    detener(): void {
        console.log("El camion esta detenido")
    }
    acelerar(): void {
        console.log("El camion esta acelerando")
    }

    constructor(modelo:string, fabricante:string, numeroLlantas:number, año:number) {
        this.modelo         = modelo;
        this.fabricante     = fabricante;
        this.numeroLlantas  = numeroLlantas;
        this.año            = año;
    }
}

function andar (camion:VehiculoTerrestre){
    camion.encender()
    camion.detener()
    camion.conducir()
    camion.acelerar()
}

let camion2 = new Camion("NLR 511 EIV", "Chevorlet", 6, 2022);
    console.log("** CAMION **")
    console.log("> Propiedades de la clase camion")
    console.log("El modelo del camion es:", camion2.modelo)
    console.log("El fabricante del camion es:", camion2.fabricante)
    console.log("El numero de llantas es:", camion2.numeroLlantas)
    console.log("El año de la camioneta es:", camion2.año)
    console.log("> Metodo en la interfaz Vehiculo Terrestre")
    camion2.conducir()
    camion2.encender()
    camion2.detener()
    camion2.acelerar()

class Automovil implements VehiculoTerrestre {
    modelo          : string;
    fabricante      : string;
    numeroLlantas   : number;

    conducir(): void {
        console.log("El automovil esta siendo conducido")
    };
    encender(): void { 
        console.log("El automovil esta encendido")
    };
    detener(): void {
        console.log("El automovil esta detenido")
    };
    acelerar(): void{
        console.log("El automovil esta acelerando")
    };
    
    constructor(modelo: string, fabricante: string, numeroLlantas: number) {
        this.modelo         = modelo
        this.fabricante     = fabricante
        this.numeroLlantas  = numeroLlantas
    }
}
function conducir (carro:VehiculoTerrestre) {
    carro.encender()
    carro.detener()
    carro.conducir()
    carro.acelerar()
}
let carro = new Automovil("Ford Mustang", "Ford", 4)
    console.log("** Automovil **")
    console.log("> Propiedades de la clase automovil")
    console.log("El modelo del vehiculo es:", carro.modelo)
    console.log("El fabricante del vehiculo es:", carro.fabricante)
    console.log("El numero de llantas del vehiculo es:", carro.numeroLlantas)
    console.log("> Metodo en la interfaz de Vehiculo Terrestre")
    carro.conducir()
    carro.encender()
    carro.detener()
    carro.acelerar()
    console.log(" - Fin de Vehiculos Terrestres")

// Vehiculos Maritimos
class Submarino implements VehiculoMaritimo{
    modelo          : string ;
    fabricante      : string;
    numeroTurbinas  : number;
    navegar(): void{
        console.log("Este submarino esta navegando")
    }; 
    encender(): void { 
        console.log("Este submarino esta encendido")
    };
    detener(): void {
        console.log("Este submarino esta detenido")
    };
    acelerar(): void{
        console.log("Este submarino esta acelerando")
    };

    constructor(modelo:string,fabricante:string,numeroTurbinas:number){
        this.modelo             = modelo;
        this.fabricante         = fabricante;
        this.numeroTurbinas     = numeroTurbinas;
    }
}
function embarcar (sub:VehiculoMaritimo){
    sub.encender();
    sub.detener();
    sub.navegar();
    sub.acelerar();
}
let subma = new Submarino("tipo 214", "Howaldtswerke", 4)
    console.log(" - Inicio Vehiculos Maritimos")
    console.log(" ** SUBMARINO **")
    console.log("> Propiedades de la clase Submarino")
    console.log("El fabricante del submarino es:",subma.fabricante);
    console.log("El modelo del submarino es:", subma.modelo);
    console.log("Su numero de turbinas es:", subma.numeroTurbinas);
    console.log("> Metodo en la interfaz Vehiculo Maritimo")
    subma.navegar();
    subma.encender();
    subma.detener();
    subma.acelerar();

class Barco implements VehiculoMaritimo {
    modelo: string ;
    fabricante: string;
    numeroTurbinas:number;

    navegar(): void {
        console.log("Este barco esta navegando");
    }
    encender(): void {
        console.log("Este barco esta encendido");
    }
    detener(): void {
        console.log("Este barco esta detenido");
    }
    acelerar(): void {
        console.log("Este barco esta acelerado");
    }
    constructor(modelo:string, fabricante:string, numeroTurbinas:number){
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.numeroTurbinas = numeroTurbinas;
    }
}
function barco (barco1:VehiculoMaritimo) {
    barco1.encender();
    barco1.detener();
    barco1.navegar();
    barco1.acelerar();
}
let barc = new Barco("Carabela.", "españoles", 2)
    console.log(" ** BARCO **")
    console.log("> Propiedades de la clase Barco")
    console.log("El modelo del barco es:", barc.modelo)
    console.log("El fabricante del barco es:", barc.fabricante)
    console.log("El numero de turbinas en el barco es:", barc.numeroTurbinas)
    console.log("> Metodo en la interfaz Vehiculo Maritimo")
    barc.navegar();
    barc.encender();
    barc.detener();
    barc.acelerar();

class Yate implements VehiculoMaritimo {
    modelo: string ;
    fabricante: string;
    numeroTurbinas:number;

    navegar(): void {
        console.log("Este yate esta navegando");
    }
    encender(): void {
        console.log("Este yate esta encendido");
    }
    detener(): void {
        console.log("Este yate esta detenido");
    }
    acelerar(): void {
        console.log("Este yate esta acelerado");
    }
    constructor(modelo:string, fabricante:string, numeroTurbinas:number){
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.numeroTurbinas = numeroTurbinas;
    }
}
function YateA (yate:VehiculoMaritimo){
    yate.navegar()
    yate.encender()
    yate.detener()
    yate.detener()
}
let yete = new Yate("Azzam", "Jalifa bin", 0)
    console.log(" ** YATE **")
    console.log("> Propiedades de la clase Yate")
    console.log("El modelo del yate es:", yete.modelo)
    console.log("El fabricante del yate es:", yete.fabricante)
    console.log("El numero de turbinas en el yate es:", yete.numeroTurbinas)
    console.log("> Metodo en la interfaz Vehiculo Maritimo")
    yete.navegar();
    yete.encender();
    yete.detener();
    yete.acelerar();
    console.log(" - Fin de Vehiculos Maritimos")


// Vehiculos Aereos
class Helicoptero implements VehiculoAereo{
    modelo          : string;
    fabricante      : string;
    numeroHelices   : number;
    
    encender(): void{
        console.log("El Helicoptero esta encendido")
    }; 
    volar(): void { 
        console.log("El Helicoptero esta volando")
    };
    detener(): void {
        console.log("El Helicoptero esta detenido en el aire")
    };
    acelerar(): void{
        console.log("El Helicoptero esta acelerando")
    };

    constructor(modelo:string,fabricante:string,numeroHelices:number){
        this.modelo         = modelo;
        this.fabricante     = fabricante;
        this.numeroHelices  = numeroHelices;
}
}
function volar (bird:VehiculoAereo){
    bird.encender();
    bird.volar();
    bird.detener();
    bird.acelerar();
}
let avionA = new Helicoptero("MD-80", "Maddog'", 6)
    console.log(" - Inicio de Vehiculos Aereos")
    console.log(" ** Helicoptero **")
    console.log("> Propiedades de la clase Helicoptero")
    console.log("El fabricante es:", avionA.fabricante);
    console.log("El modelo del helicoptero es: ",avionA.modelo);
    console.log("Su numero de helices es", avionA.numeroHelices);
    console.log("> Metodo en la interfaz Vehiculo Aereo")
    avionA.encender()
    avionA.volar()
    avionA.detener()
    avionA.acelerar()

class Avion implements VehiculoAereo {
    modelo: string;
    fabricante: string;
    numeroHelices: number;

    encender(): void{
        console.log("El avion esta encendido")
    }; 
    volar(): void { 
        console.log("El avion esta volando")
    };
    detener(): void {
        console.log("El avion esta detenido en el aire")
    };
    acelerar(): void{
        console.log("El avion esta acelerando")
    };

    constructor(modelo:string,fabricante:string,numeroHelices:number){
        this.modelo         = modelo;
        this.fabricante     = fabricante;
        this.numeroHelices  = numeroHelices;
    }
}

function planear (avion:VehiculoAereo) {
    avion.encender();
    avion.volar();
    avion.detener();
    avion.acelerar();
}

let avion = new Avion("Cessna", "Cessna 172 Skyhawk", 4)
    console.log(" ** Avion **")
    console.log("> Propiedades de la clase Avion")
    console.log("El fabricante es:", avion.fabricante);
    console.log("El modelo del avion es: ",avion.modelo);
    console.log("Su numero de helices es", avion.numeroHelices);
    console.log("> Metodo en la interfaz Vehiculo Aereo")
    avion.encender()
    avion.volar()
    avion.detener()
    avion.acelerar()

class Avioneta implements VehiculoAereo {
    modelo          : string;
    fabricante      : string;
    numeroHelices   : number;
    
    encender(): void{
        console.log("La avioneta esta encendido")
    }; 
    volar(): void { 
        console.log("La avioneta esta volando")
    };
    detener(): void {
        console.log("La avioneta esta detenido en el aire")
    };
    acelerar(): void{
        console.log("La avioneta esta acelerando")
    };

    constructor(modelo:string,fabricante:string,numeroHelices:number){
        this.modelo         = modelo;
        this.fabricante     = fabricante;
        this.numeroHelices  = numeroHelices;
    }
}
function Avi (avioneta:VehiculoAereo){
    avioneta.encender();
    avioneta.volar();
    avioneta.detener();
    avioneta.acelerar();
}

let avionetaA = new Avioneta("Learjet", "Learjet 45XR", 4)
    console.log(" ** Avioneta **")
    console.log("> Propiedades de la clase Avioneta")
    console.log("El fabricante es:", avionetaA.fabricante);
    console.log("El modelo del avion es: ",avionetaA.modelo);
    console.log("Su numero de helices es", avionetaA.numeroHelices);
    console.log("> Metodo en la interfaz Vehiculo Aereo")
    avionetaA.encender()
    avionetaA.volar()
    avionetaA.detener()
    avionetaA.acelerar()