let curso = [
];

const agregar = (curso) => {
    let nombre = prompt("ingrese el nombre: ");
    let dscripcion = prompt("ingrese la dscripcion: ");
    let contenido = prompt("ingrese el contenido: ");
    let informacion = {
        "nombre":nombre,
        "dscripcion":dscripcion,
        "contenido":contenido

    };
    curso.push(informacion);
    return curso;
    
};

const editar = (curso) => {
    let nombre1 = prompt("ingrese el nombre: ");
    for(let curso1 in curso){
        if(curso[curso1]["nombre"] == nombre1){
            let nombre = prompt("ingrese el nombre: ");
            let dscripcion = prompt("ingrese la dscripcion: ");
            let contenido = prompt("ingrese el contenido: ");
            let informacion = {
                curso,["nombre"]:nombre,
                curso,["dscripcion"]:dscripcion,
                curso,["contenido"]:contenido
        
            };
            curso.push(informacion);
            return curso;
        }
    }
};

const eliminar = (curso) => {
    let nombre1 = prompt("ingrese el nombre: ");
    for(let curso1 in curso){
        if(curso[curso1]["nombre"] == nombre1){
            curso.splice(curso1,1);
            console.log("Eliminado")
            return curso
        }

    }
    console.log("curso no encontrado")
    return curso;
};

let op = prompt("ingrese 1. Agregar ,2. para editar, 3 eliminar,4. salir" )

while( op != 0){
    
    if(op == 1){
        curso = console.log(agregar(curso))
        break
        
    }
    else if(op == 2){
        curso = console.log(editar(curso))
        break
        
    }
    else if(op == 3){
        curso = console.log(eliminar(curso))
        break
        
    }
    else if(op == 4){
        console.log("Adios ")
        break
        
    }
    else{
        console.log("opcion incorrecta")
        break
    }
}