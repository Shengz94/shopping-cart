import logo from "../img/logo/xiaomi-logo.png"
import React, {useEffect} from "react";
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const TopBar = (props) => {

    function goHome(){
        props.history.push("/");
    }

    function goCheckOut(){
        props.history.push("/CheckOut");
    }

    useEffect(() => {
        window.onscroll = function() {onScroll()};
        var topBar = document.getElementById("top-bar");
        var fixed = topBar.offsetTop;
        function onScroll() {
            if (window.pageYOffset > fixed) {
                topBar.classList.add("fixed");
            } else {
                topBar.classList.remove("fixed");
            }
        }
    }, []);
    

    return (
        <div className="top-bar" id="top-bar">
            <div className="left-side">
                <div className="logo">
                    <IconButton aria-label="Home" onClick={() => goHome()}>
                        <img src={logo} alt="xiaomi-logo" onClick={() => goHome()}/>
                    </IconButton>  
                </div>
            </div>
            <div className="center-side">
                Xiaomi Store (by <a href="https://github.com/Shengz94">Sheng Zhu</a>)
            </div>
            <div className="right-side">
                <div className="cart">
                    <div><IconButton size="small" aria-label="CheckOut" onClick={() => goCheckOut()}>
                        <ShoppingCartIcon style={{color: "black"}} fontSize="small" />
                    </IconButton>
                    <span>{(props.numProducts > 0 ? "(" + props.numProducts + ")" : "")}</span> </div>
                </div>
            </div>
        </div>
    );

}

export default TopBar;