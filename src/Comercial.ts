//Clase hija de Empleado
class Comercial extends Empleado{
    //1-Atributos de class
    private comision: number;
    
    //2-Constructor de clase
    constructor(newNombre:string,newEdad:number, newComision:number){
        super(newNombre, newEdad);
        this.comision = newComision;
    }
    //3-Métodos propios
}