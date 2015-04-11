import React       from "react";
import CartPopup   from "./components/CartPopup";
import CartAdd     from "./components/CartAdd";
import {clearCart} from "./actions/cart";

React.render(<CartPopup/>, document.getElementById("cartPopup"));
React.render(<CartAdd/>,   document.getElementById("cartAdd"));

let clearerer = document.getElementById("clearCart");
clearerer.addEventListener("click", clearCart);
