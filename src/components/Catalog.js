import { Fragment } from "react"
import ProductCard from "./ProductCard";
import TopBar from "./TopBar";

const Catalog = (props) => {

    function clickCard(product){
        // how to know which id to pass?? set a state on route with id?
        props.setSelectedProduct(product);
        props.history.push("/ProductInfo");
        //window.history.replaceState(null, title, "/ProductInfo");
    }
    
    return (
      <Fragment>
        <TopBar history={props.history} numProducts={props.numProducts}></TopBar>
        <div className="store">
          <div className="catalog">
            {[...props.products.values()].map(product => {
              return <ProductCard key={product.id} product={product} clickCard={() => {clickCard(product)}} addCart={(id) => {props.addCart(id)}} />
            })}
          </div>
        </div>
      </Fragment>
    )

}

export default Catalog;