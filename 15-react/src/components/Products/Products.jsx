import './Products.css'

// Props desestructurados


const Products = ({image,title,description,price}) => {
    return (
        <>
        <div className="products--container">
            <div className="products--card">
                <img src={image} alt="" />
                <h2>{title}</h2>
                <p>{description}</p>
                <h3>${price}</h3>
            </div>
        </div>
        </>
    )
}

export default Products