import {
  CLEAR_CART,
  ADD_TO_CART,
  INCREASE_ITEM_CART,
  DECREASE_ITEM_CART,
  REMOVE_ITEM_CART,
  GET_TOTAL,
} from "../actions";

export default function reducer(state, action) {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cartItems: [] };
    case REMOVE_ITEM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (items) => action.payload !== items.id
        ),
      };
    case ADD_TO_CART:
      const { id, title, price, image } = action.payload;
      const tempItem = state.cartItems.find((item) => item.id === id);
      if (tempItem) {
        const tempCart = state.cartItems.map((item) => {
          if (item.id === id) {
            item = { ...item, amount: item.amount + 1};
          }
          return item;
        });
        return { ...state, cart: tempCart };
      }
      const newItem = { id, title, price, image, amount: 1 };
      console.log("not")
      return { ...state, cartItems: [...state.cartItems, newItem] };
    case INCREASE_ITEM_CART:
      return {
        ...state,
        cartItems: state.cartItems.map((items) => {
          if (action.payload === items.id) {
            return { ...items, amount: items.amount + 1 };
          }
          return items;
        }),
      };
    case DECREASE_ITEM_CART:
      return {
        ...state,
        cartItems: state.cartItems.map((items) => {
          if (action.payload === items.id) {
            return { ...items, amount: items.amount - 1 };
          }
          return items;
        }),
      };
    case GET_TOTAL:
      let { totalPrice, totalAmount } = state.cartItems.reduce(
        (cartTotal, items) => {
          const { price, amount } = items;
          const itemTotal = price * amount;

          cartTotal.totalPrice += itemTotal;
          cartTotal.totalAmount += amount;
          return cartTotal;
        },
        { totalPrice: 0, totalAmount: 0 }
      );

      totalPrice = parseFloat(totalPrice.toFixed(2));
      return { ...state, totalAmount, totalPrice };
    default:
      return state;
  }
}
