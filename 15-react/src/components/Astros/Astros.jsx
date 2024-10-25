import Navbar from "../../components/Navbar/Navbar";
import Astro from "../../components/Astros/AstroCard/Astro";
import useAstros from "../../components/Astros/hooks/useAstros";
import "./Astros.css";


export default function Astros() {
    //Utilizamos el componente Astros para modificar el estado del mismo utilizando useState. Para ello, utilizamos Astro como tarjeta Base
    
    const astros = useAstros();
    
    return (
        <>
        <Navbar />
        {astros.map( (astro,index) => 
            <Astro key = {index} {...astro} />
        )}
        </>
    );
}