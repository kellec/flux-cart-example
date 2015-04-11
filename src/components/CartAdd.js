import React       from "react";
import {addToCart} from "../actions/cart";

let styles = {
  border: 0,
  background: "tomato",
  color: "white",
  padding: "15px 30px",
  fontSize: 16
};

let fakeProduct = {
  id: 1,
  name: "Ice Skates",
  price: 345
}

export default React.createClass({
  handleClick() {
    addToCart(fakeProduct);
  },

  render() {
    return <button style={styles} onClick={this.handleClick}>Add to cart</button>;
  }
});