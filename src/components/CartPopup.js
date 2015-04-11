import React            from "react";
import map              from "lodash/collection/map";
import cartStore        from "../stores/cart";
import {removeFromCart} from "../actions/cart";

let boxStyles = {
  border       : "1px solid #d7d7d7",
  width        : 300,
  padding      : 20,
  marginBottom : 30,
  fontFamily   : "sans-serif"
};

let removererStyles = {
  color  : "tomato",
  cursor : "pointer"
};

let Removerer = React.createClass({
  handleClick() {
    removeFromCart(this.props.id);
  },

  render() {
    return <span style={removererStyles} onClick={this.handleClick}> remove</span>;
  }
});

export default React.createClass({
  getInitialState() {
    return {
      products: cartStore.getAll()
    }
  },

  componentWillMount() {
    cartStore.sub(this.update);
  },

  componentWillUnmount() {
    cartStore.unsub(this.update);
  },

  update() {
    this.setState(this.getInitialState());
  },

  render() {
    let {products} = this.state;

    return  <div style={boxStyles}>
              {map(products, (p) => {
                return  <div>
                          <strong>{p.name}</strong>
                          <span> (${p.price}) </span>
                          <Removerer id={p.id} />
                        </div>
              })}
            </div>;
  }
});