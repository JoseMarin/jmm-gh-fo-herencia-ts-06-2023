//Clase hija de Empleado

class Repartidor extends Empleado{
    //1-Atributos de clase
    protected area: string;

    //2-Constructor de clase
    constructor(newName:string, newEdad:number, newArea:string){
        super(newName,newEdad);
        this.area = newArea;
    }
    //3-Método propios de clase
    getArea():string {
        return this.area;
    } 

    setArea(newArea:string):void {
        this.area = newArea;
    }

    saluda():string{
        return 'Hola';
    }
}

