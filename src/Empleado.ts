//definimos superclass Empleado
class Empleado {
    //1-Atributos de class
    protected nombre:string;
    protected departamento: string;
    protected edad: number;
    protected esResponsable: boolean;

    //2-Constructor de clase
    constructor(newNombre:string, newEdad: number){
        this.nombre = newNombre;
        this.departamento = 'IT';
        this.edad = newEdad;
        this.esResponsable = false;
    }

    //3-Métodos propios
    setResp(){
        if(this.esResponsable==true){
            this.esResponsable = false;
        } else {
            this.esResponsable = true;
        }
    }
}





