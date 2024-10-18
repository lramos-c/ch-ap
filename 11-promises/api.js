const URL_BASE = "https://fakestoreapi.com/products";
const mainContainer = document.querySelector(".container");

//evento de carga
window.addEventListener("load", () => {
    const productsArray = JSON.parse(localStorage.getItem("products"));
    showAllProducts(productsArray);
})

const showAllProducts = async function(productsArray) {
    const products = await productsArray;
    if (!products) return;

    for (let i = 0; i < products.length; i++) {   
        const cardProduct = `
        <div class="card" style="width: 18rem;">
          <img src="${products[i].image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${products[i].title}</h5>
            <p class="card-text">${products[i].description}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Price: $${products[i].price}</li>
            <li class="list-group-item">Category: ${products[i].category}</li>
          </ul>
        </div>
        `;

        mainContainer.insertAdjacentHTML("afterbegin", cardProduct);
    }
}
const cardProduct = `
<div class="card">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
`;
//function declaration async
async function  getallProducts(){
    // const  response = await fetch(URL_BASE);
    // const data =  await response.json();
    // console.log(data);
    if(localStorage.getItem("products")) {
        return}
    try {
        const response = await fetch(URL_BASE);
        if(!response) throw new Error("Error al obtener los productos");
        const data = await response.json();
        //si retornamos algo dentro de una funcion async, siempre va a retoornar una promesa
        localStorage.setItem("products", JSON.stringify(data));
        return data;   
    } catch (error) {
        console.log("Error",  error);
    }
}
//function expression async
const getSingleProduct = async function(id) {
    try {
        const response = await fetch(`${URL_BASE}/${id}`);
        if(!response) throw new Error("Error al obtener el producto");
        const data = await response.json();
        console.log(data);        
    } catch (error) {
        console.log("Error",  error);
    }
}

//add product
const addProduct = async (productObject) =>{
    const response =  await fetch(URL_BASE,{
        method: "POST",
        body:  JSON.stringify(productObject)
    });
    const data = await response.json();
    console.log(data);

}


//update product
const updateProduct = async (productObject) =>{
    try{
    const response =  await fetch(`${URL_BASE}/${productObject.id}`,{
        method: "PUT",
        body:  JSON.stringify(productObject)
    });
    const data = await response.json();
    console.log(data);
    } catch (error) {
        console.log("Error",  error);
    }
}

//delete product with try catch
const deleteProduct = async (id) =>{
    try {
    const response =  await fetch(`${URL_BASE}/${id}`,{
        method: "DELETE"
    });
    const data = await response.json();
    console.log(data);
    } catch (error) {
        console.log("Error",  error);
    }
}

//console.log(getallProducts());

//showAllProducts(getallProducts());

updateProduct({
    id: 1,
    title: "Prueba"
})  

deleteProduct(1)

getSingleProduct(1);