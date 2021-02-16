import { Fragment } from "react"
import { Button } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import TopBar from "./TopBar";

const ProductInfo = (props) => {


    function goBack(){
        props.history.push("/Catalog");
    }

    if(!props.product){
        goBack();
        return null;
    }

    return (
        <Fragment>
            <TopBar history={props.history} numProducts={props.numProducts}></TopBar>
            <div className="product-info-page">
                <div className="back-button">
                    <IconButton aria-label="Back" onClick={goBack}>
                        <ArrowBackIcon />
                    </IconButton>
                </div>
                <div className="product-info">
                    <div className="left-content">
                        <div className="main-image">
                            <img src={props.product.img} alt={props.product.title}/>
                        </div>
                    </div>
                    <div className="right-content">
                        <h3>{props.product.title}</h3>
                        <p>{props.product.category}</p>
                        <h3>{props.product.price + "€"}</h3>
                        <Button variant="contained" onClick={() => {props.addCart(props.product.id)}}>Add to Cart</Button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ProductInfo;