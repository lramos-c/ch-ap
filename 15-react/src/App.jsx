
import './App.css';
import Button from './components/Button/button';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import RecipeReviewCard from './components/Card/Card';
import SignInSide from './components/Login/Login';

function App() {

// Gonna save the images route in constants
const tenisMorados = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933"
const tenisDark = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/241417/1.jpg?6747"
const tenisCamel = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/4410121/1.jpg?4437"
const space = "https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

const stylesCard = {
  color: "#ED2659",
  fontSize: "2rem",
  border: "1px solid white",
  padding: "1rem",
  borderRadius: "1rem",
  backgroundImage: `url(${space})`,
}

  return (
  <>
    <Navbar />
    <h1>Hola React</h1>
    <Products image={tenisMorados} title="Tenis Morados" description="Tenis aerodinamicos para running" price="100"/>
    <br />
    <Products image={tenisDark} title="Tenis Dark" description="Tenis elegantes y sofisticados" price="100"></Products>
    <br />
    <Products image={tenisCamel} title="Tenis Camel" description="Tenis para el viernes de oficina" price="100"/>
    {/* 
    <Button texto="Registrarse" />
    <br />
    <Button texto="Iniciar Sesion" /> */}

    <h2 style={stylesCard}>Material UI - Components</h2>
    <div style={{display:"flex",justifyContent:"center",}}>
    <RecipeReviewCard />
    </div>
    
    </>
    
  )
}

export default App
