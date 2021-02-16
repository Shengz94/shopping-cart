import React, {Fragment, useState, useEffect} from "react";
import ProductCheckOut from "./ProductCheckOut";
import TopBar from "./TopBar";
import { Button, TextField } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Tooltip from '@material-ui/core/Tooltip';

function checkCode(code, productsPrice){
    /* Check code with some API */

    let total = 0;
    if(productsPrice > 0){
        if(code.toLowerCase() === "discount10" && productsPrice > 0){
            total = productsPrice * 0.1;
        }
        else if(code.toLowerCase() === "discount50" && productsPrice > 0){
            total = productsPrice * 0.5;
        }
    }
    return total.toFixed(2);

}

const CheckOut = (props) => {
    const [productsPrice, setProductsPrice] = useState(getTotalPrice());
    const [shippingPrice, setShippingPrice] = useState(getShippingCost());
    const [discountPrice, setDiscountPrice] = useState(0);
    const [discountCode, setDiscountCode] = useState("");

    useEffect(() =>{
        applyDiscount();
        setShippingPrice(getShippingCost());
    }, [productsPrice]);

    function goBack(){
        props.history.push("/Catalog");
    }

    function getTotalPrice(){
        let cart = props.cart;
        let products = props.products;
        let total = 0;
        products.forEach(product => {
            if(cart.has(product.id)){
                total += (parseFloat(product.price) * cart.get(product.id));
            }
        });
        return total;
    }

    function getShippingCost(){
        let total = 0;
        if(productsPrice > 100 && productsPrice < 150){
            total = 1.99;
        }
        else if(productsPrice > 75 && productsPrice < 150){
            total = 2.99;
        }
        else if(productsPrice > 50 && productsPrice < 150){
            total = 3.99;
        }
        else if(productsPrice > 0 && productsPrice < 150){
            total = 4.99;
        }
        return total;
    }

    function applyDiscount(){
        setDiscountPrice(checkCode(discountCode, productsPrice));
    }

    function handleDiscoundCodeChange(e){
        setDiscountCode(e.target.value);
    }

    function removeProductFromCart(id){
        props.removeProductFromCart(id);
        setProductsPrice(getTotalPrice(props.cart, props.products));
    }

    function changeProductFromCart(id, change){
        props.changeProductFromCart(id, change);
        setProductsPrice(getTotalPrice(props.cart, props.products));
    }

    return (
        <Fragment>
            <TopBar history={props.history} numProducts={props.numProducts}></TopBar>
        
            <div className="checkout-page">
                <div className="back-button">
                    <IconButton aria-label="Back" onClick={goBack}>
                        <ArrowBackIcon />
                    </IconButton>
                </div>
                <div className="left-side">
                    <div className="product-list">
                        {[...props.products.values()].filter( product => {
                            return props.cart.has(product.id)
                        }).map(product => {
                            let quantity = props.cart.get(product.id);
                            return <ProductCheckOut key={product.id} product={product} quantity={quantity} removeProductFromCart={(id) => removeProductFromCart(id)} changeProductFromCart={(id, change) => changeProductFromCart(id, change)}/>
                        })}
                    </div>
                </div>
                <div className="right-side sticky">
                    <div className="checkout-info">
                        <div className="products-price">
                            <label>Price:</label>
                            <span>{productsPrice}€</span>
                        </div>
                        <div className="shipping-price">
                            <label>Shipping:</label>
                            <span>{shippingPrice}€</span>
                        </div>
                        <div className="discount-price">
                            <label>Discount:</label>
                            <span>{discountPrice}€</span>
                            <br/>
                            <Tooltip title="Try 'discount10' or 'discount50'">
                                <TextField size="small"  label="Coupon" variant="outlined" value={discountCode} onChange={(e) => handleDiscoundCodeChange(e)}/>
                            </Tooltip>
                            <Button size="medium" variant="contained" onClick={() => applyDiscount()}>Apply</Button>
                        </div>
                        <hr/>
                        <div className="total-price">
                            <label>Total:</label>
                            <span>{(productsPrice + shippingPrice - discountPrice).toFixed(2)}€</span>
                        </div>
                        <Tooltip title="Payment not implemented">
                            <Button size="small" variant="contained">Checkout</Button>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </Fragment>
    );

}

export default CheckOut;