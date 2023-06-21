"use strict";
//definimos superclass Empleado
class Empleado {
    //2-Constructor de clase
    constructor(newNombre, newEdad) {
        this.nombre = newNombre;
        this.departamento = 'IT';
        this.edad = newEdad;
        this.esResponsable = false;
    }
    //3-Métodos propios
    setResp() {
        if (this.esResponsable == true) {
            this.esResponsable = false;
        }
        else {
            this.esResponsable = true;
        }
    }
}
