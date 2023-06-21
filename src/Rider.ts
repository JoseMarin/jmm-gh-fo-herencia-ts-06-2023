//Clase hija de Repartidor

class Rider extends Repartidor {
    //1-Atributos de class
    private kmDia: number;

    //2-Constructor de clase
    constructor(newName:string, newEdad:number, newArea:string, newKmDia:number){
        super(newName,newEdad,newArea);
        this.kmDia = newKmDia;
    }
    //3-Métodos Propios
}