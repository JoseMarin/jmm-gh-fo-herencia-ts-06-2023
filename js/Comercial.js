"use strict";
//Clase hija de Empleado
class Comercial extends Empleado {
    //2-Constructor de clase
    constructor(newNombre, newEdad, newComision) {
        super(newNombre, newEdad);
        this.comision = newComision;
    }
}
