//Crear instancias de las clases
let emp = new Empleado('Juan', 30);
emp.setResp();
console.log(emp);

//Instancia de repartidor 
let rep = new Repartidor('Jose',30,'Valencia');
rep.setResp();
console.log(rep);
console.log(rep.saluda());

//Instancia de comercial
let com = new Comercial('Fernando', 45, 700);
console.log(com);


//instancia de rider 
let rd = new Rider('Diana',26,'Barcelona', 300);
console.log(rd);
console.log(rd.saluda());
