import dispatcher from "../dispatcher";

export default {
  addToCart(data) {
    // ~*~*~*~
    // Any XHR needed to tell the server stuff
    // ~*~*~*~
    dispatcher.dispatch({actionType: "CART::ADD", data});
  },

  removeFromCart(id) {
    dispatcher.dispatch({actionType: "CART::REMOVE", id});
  },

  clearCart() {
    dispatcher.dispatch({actionType: "CART::CLEAR"});
  }
};