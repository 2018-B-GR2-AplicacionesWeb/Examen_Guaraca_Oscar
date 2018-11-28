function require(fs1: string) {

}

const  fs = require('fs');
const nombreDeLaBase = 'people.json';


//Lectura de datos de la BASE---people---
function lecturaDatos(nombreBase) {

    //uso de promise
    return new Promise(function (resolve, reject) {
        fs.readFile(nombreBase, 'utf-8', function (error, ContenidoLeido) {
            if (error) {
                reject('\n\tError de lectura');
            }
            else {
                resolve(ContenidoLeido);
            }
        });
    });
}


function obtenerData() {
    return new Promise(function (resolve) {
        lecturaDatos(nombreDeLaBase)
            .then(function (contenidoDeLaBase) {
                let respuesta = contenidoDeLaBase;
                resolve(respuesta);
            })
            .catch(function (resultadoError) {
                console.log('\n\t\tError en el sistema\n\n', resultadoError);
            });
    });
}

obtenerData().then(
    function (contenidoDeLaBase) {




        // 1) Busque los tipos de "gender"

        //MAP
        console.log('\n\n1) Buscar Gender en la base de Datos`');
        const bbd = JSON.parse(contenidoDeLaBase);
        bbd.map(
            (valor)=>{
                return valor.gender;
            }
        ).forEach(
            (valorNuevo) => console.log(valorNuevo)
        );
    }
)

//  2) Busque los tipos de "eye_color"
obtenerData().then(
    function (contenidoDeLaBase) {
        //## 1) Busque los tipos de "gender" en el arreglo `people.json`
        //utilizacion del map para la busqueda de eye_color
        console.log('\n\n2) Busque los tipos de "eye_color" en el arreglo `people.json`');
        const bbd = JSON.parse(contenidoDeLaBase);
        bbd.map(
            (valor)=>{
                return valor.eye_color;
            }
        ).forEach(
            (valorNuevo) => console.log(valorNuevo)
        );
    }
)

//  3) Busque los tipos de "skin_color"

obtenerData().then(
    function (contenidoDeLaBase) {
        console.log('\n\n3) Busque tipos de "skin_color"');
        const bbd = JSON.parse(contenidoDeLaBase);
        bbd.map(
            (valor)=>{
                return valor.skin_color;
            }
        ).forEach(
            (valorNuevo) => console.log(valorNuevo)
        );
    }
)


// 4) Busque los tipos de "hair_color"
obtenerData().then(
    function (contenidoDeLaBase) {

        console.log('\n\n4) Busque tipos de "hair_color" ');
        const bbd = JSON.parse(contenidoDeLaBase);
        bbd.map(
            (valor)=>{
                return valor.hair_color;
            }
        ).forEach(
            (valorNuevo) => console.log(valorNuevo)
        );
    }
)



// 6) Cree un arreglo del abecedario, revisar si existe al menos un personaje con cada letra del abecedario.
const abecedario=['A', 'B', 'C',  'D', 'E', 'F',  'G',  'H', 'I',  'J', 'K','L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
interface Res {
    'dato': boolean
}
const arregloRes=[];

obtenerData().then(
    function (contenidoDeLaBase) {
        console.log('\n\n6) Determinar un personaje con cada letra.');
        const bbd = JSON.parse(contenidoDeLaBase);
        bbd.forEach(
            (valorNuevo) => {

                let cont =0;
                abecedario.forEach(
                    value => {
                        if(valorNuevo.name.substr(0,1)===value){
                            arregloRes.push(value+':'+true)
                            cont=1;
                        }else if(cont===0){
                            arregloRes.push(value+':'+false)
                        }
                    }
                )
            }
        )
        console.log(arregloRes);
    }
).catch(function (resultadoError) {
    console.log('\n\tOcurrio un error al cargar el archivo\n\n');
});



obtenerData().then(
    function (contenidoDeLaBase) {
        console.log('\n\n8) Revisar si todos los personajes han usado vehicles.');
        const bbd = JSON.parse(contenidoDeLaBase);
        let todosPersnajesAuto=true;
        bbd.forEach(
            (valorNuevo) => {
                if(valorNuevo.vehicles!==undefined){
                    todosPersnajesAuto = false;
                }
            }
        )
        if(todosPersnajesAuto){
            console.log('Todos con auto');
        }else{
            console.log('No todos estan con auto');
        }


    }
)



