export default function reducer(state, action) {
  switch (action.type) {
    case "CLEARCART":
      return { ...state, cartItems: [] };
    case "REMOVE":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (items) => action.payload !== items.id
        ),
      };
    default:
      return state;
  }
}
