"use strict";
//Clase hija de Empleado
class Repartidor extends Empleado {
    //2-Constructor de clase
    constructor(newName, newEdad, newArea) {
        super(newName, newEdad);
        this.area = newArea;
    }
    //3-Método propios de clase
    getArea() {
        return this.area;
    }
    setArea(newArea) {
        this.area = newArea;
    }
}
