import { Button } from "@material-ui/core";

const ProductCheckOut = (props) => {

    return(
        <div className="product-card">
            <img id={props.product.id} src={props.product.img} alt={props.product.title} />
            <p className="product-title">{props.product.title}</p>
            <p className="product-price">{props.product.price}€</p>
            <p className="product-quantity">X {props.quantity}</p> 
            <div className="card-action">
                <Button style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}} size="small" variant="contained" className="change-product" onClick={() => {props.changeProductFromCart(props.product.id, "add")}}>
                    +
                </Button>
                <Button style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}} size="small" variant="contained" className="change-product" onClick={() => {props.changeProductFromCart(props.product.id, "subtract")}}>
                    -
                </Button>
                <Button style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}} size="small" variant="contained" className="remove-product" onClick={() => {props.removeProductFromCart(props.product.id)}}>
                    X
                </Button>
            </div>
        </div>
    );

}

export default ProductCheckOut;