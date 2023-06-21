"use strict";
//Clase hija de Repartidor
class Rider extends Repartidor {
    //2-Constructor de clase
    constructor(newName, newEdad, newArea, newKmDia) {
        super(newName, newEdad, newArea);
        this.kmDia = newKmDia;
    }
    //3-Métodos Propios
    saluda() {
        return `${super.saluda()} ${this.nombre}`;
    }
}
