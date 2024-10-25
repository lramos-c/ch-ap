import './Astro.css'

const Astro = (datos) => {
    return (
        <div className='astro--container'>
            <h3>{datos.name}</h3>
            <p>{datos.craft}</p>
        </div>
    )
}

export default Astro