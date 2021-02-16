
import Button from '@material-ui/core/Button';

const ProductCard = (props) =>{
    
    return(
        <div className="product-card" id={props.product.id} >
            <img id={props.product.id} src={props.product.img} alt={props.product.title} onClick={() => {props.clickCard(props.product.id)}} />
            <p className="product-title">{props.product.title}</p>
            <p className="product-price">{props.product.price}€</p>
            <Button size="medium" variant="contained" className="shop-button" onClick={() => {props.addCart(props.product.id)}}>
                Add to cart
            </Button>
        </div>
    )
}

export default ProductCard;