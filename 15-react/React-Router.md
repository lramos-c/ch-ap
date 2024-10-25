#React Router DOM v6

1. Instalar los modulos de React-Router-Dom en el proyecto de React

```npm install react-router-dom```

2. En el archivo main.jsx debemos crear una constante llamada 'router', donde vive el componente 'createBrowserRouter' y dentro las rutas especificas que el usuario puede seguir.

3. Importar createBrowsetRouter desde react-router-dom

4. Crear la primera ruta dentro de la constante 'router', es decir, llenar el primer Object que recibe un key-value referente al path y el componente
```javascript
const router = createBrowserRouter([
  {
    path: '/', element: <App />
  }
```
5. Para indicar donde se renderiza react-router, debemos sustituir el componente `<App />` que se encuentra dentro `React.<StrictMode>` y en su lugar, agregar el componente <RouterProvider /> el cual va a recibir el conjunto (Array) de rutas a renderizar