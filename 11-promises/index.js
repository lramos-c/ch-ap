console.log("Voy antes de la función wait");

const waitNSecs = (miliseconds) => {
    console.log(`Voy a esperar ${miliseconds} milisegundos`); 
    return new Promise((resolve,reject) => {
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve("La peticion fue exitosa");
        } else {
            reject("La peticion no fue exitosa");
        }
    },miliseconds)
}) } ;


waitNSecs(6000).then(function(result) {
    console.log(result);
}).catch(function(error) {
    console.log(error);
});


console.log("Voy despues de la función wait");