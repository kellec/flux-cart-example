import dispatcher       from "../dispatcher";
import { EventEmitter } from "events";

let cart = {};

class Store extends EventEmitter {
  constructor() {
    this.NS = "CART";
  }

  broadcast() { this.emit(this.NS); }
  sub(fn) { this.on(this.NS, fn); }
  unsub(fn) { this.removeListener(this.ns, fn); }

  getAll() { return cart; }
}

let store = new Store();

Store.token = dispatcher.register(payload => {
  let {actionType, data, id} = payload;

  switch (actionType) {
    case "CART::ADD":
      cart[data.id] = data;
      store.broadcast();
      break;

    case "CART::REMOVE":
      delete cart[ id ];
      store.broadcast();
      break;

    case "CART::CLEAR":
      cart = {};
      store.broadcast();
      break;
  }
});

export default store;
