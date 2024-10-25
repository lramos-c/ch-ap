import { useEffect,useState } from "react";


    const useAstros = () => {
        
    //Guardar en una constante la ruta de la API
    const URL_ASTROS = '/data/astros.json';
    // Definir useState (hook)
    const [astros, setAstros] = useState([]);
    // Consumir la API utilizando useEffect (hook)
    useEffect(() => {
        fetch(URL_ASTROS).then((response) => response.json()).then((data) => {
            setAstros(data.people);
        })
    }, [])

    return astros;

}

export default useAstros;