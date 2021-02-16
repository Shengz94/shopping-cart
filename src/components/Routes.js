import React, {useState} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Catalog from "./Catalog";
import ProductList from "./ProductList"
import ProductInfo from "./ProductInfo";
import CheckOut from "./CheckOut";


function getProducts(){
  let products = new Map();
  ProductList.forEach(product =>{
    products.set(product.id, product)
  })
  return products;
}

const Routes = (props) => {
  const [products, setProducts] = useState(getProducts());
  const [numProducts, setNumProducts] = useState(0);
  const [cart, setCart] = useState(new Map());
  const [selectedProduct, setSelectedProduct] = useState();

  function addCart(id){
    let newCart = cart;
    if(newCart.has(id)){
      newCart.set(id, newCart.get(id) + 1);
    }
    else{
      newCart.set(id, 1);
    }
    setNumProducts(numProducts + 1);
    setCart(newCart);
  }

  function removeProductFromCart(id){
    let newCart = cart;
    let numProduct = newCart.get(id);
    newCart.delete(id);
    setCart(newCart);
    setNumProducts(numProducts - numProduct);
  }

  function changeProductFromCart(id, change){
    let newCart = cart;
    if(newCart.has(id)){
      if(change === "subtract"){
        if(newCart.get(id) > 1){
          newCart.set(id, newCart.get(id) - 1);
        }
        else{
          newCart.delete(id);
        }
        setNumProducts(numProducts - 1);
      }
      else if(change === "add"){
        newCart.set(id, newCart.get(id) + 1);
        setNumProducts(numProducts + 1);
      }
      console.log(cart.get(id));
    }
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Catalog" render={(props) => (
          <Catalog {...props} cart={cart} addCart={(id) => addCart(id)} numProducts={numProducts} products={products} setSelectedProduct={setSelectedProduct}/>
        )}/>
        <Route exact path="/ProductInfo" render={(props) => (
          <ProductInfo {...props} addCart={(id) => addCart(id)} numProducts={numProducts} product={selectedProduct}/>
        )}/>
        <Route exact path="/CheckOut" render={(props) => (
          <CheckOut {...props} cart={cart} removeProductFromCart={(id) => removeProductFromCart(id)} numProducts={numProducts} products={products} changeProductFromCart={(id, change) => changeProductFromCart(id, change)}/>
        )}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;