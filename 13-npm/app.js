const axios = require ('axios').default;



// Hacer una petición para un usuario con ID especifico
// axios.get('https://fakestoreapi.com/products')
//   .then(function (response) {
//     // manejar respuesta exitosa
//     console.log(response);
//   })
//   .catch(function (error) {
//     // manejar error
//     console.log(error);
//   })
//   .finally(function () {
//     // siempre sera executado
//   });


  async function getAllProducts() {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

getAllProducts();