import "./Navbar.css"
import logoNasa from "../../assets/Nasa.png"
import Button from "../Button/button"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <>
            
            <nav className="navbar--container">
                
                    {/* Logo */}
                    <div className="navbar--logo">
                        <Link to="/"><img src={logoNasa} alt="logo nasa" /></Link>
                        
                    </div>
                    {/* Menu */}
                    <div className="navbar--menu">
                    <Link to="/astros">Astros</Link>
                        <a href="">NASA</a>
                        <a href="">ISS</a>
                    </div>
                    {/* Button */}
                    <div className="navbar--buttons">
                        <Button texto="Registrarse" />
                        <Link to="/login"><Button texto="Iniciar Sesion" /></Link>
                        <AccountCircleIcon sx={{ fontSize: 40 }}/>
                    </div>
                    

            </nav>

        </>
    )
}

export default Navbar