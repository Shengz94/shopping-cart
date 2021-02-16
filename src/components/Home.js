import React from "react";
import Button from '@material-ui/core/Button';
import logo from "../img/logo/xiaomi-logo.png"

const Home = (props) => {
  function enterStore(){
    props.history.push("/Catalog");
  }

  return (
    <div className={" home-screen"}>
      <div className="set">
        <div className="logo">
          <img src={logo} alt="xiaomi-logo"/>
          <br/>
          <Button size="large" variant="contained" className="shop-button" onClick={enterStore}>
            Enter store
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;