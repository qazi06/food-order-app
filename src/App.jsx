import { useState } from "react";
import CartProvider from "./store/CartProvider";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meal/Meals";
const App = () => {
  const [isCartShown, setIsCartShown] = useState(false);

  const  addCartShownHandler = () => {
    setIsCartShown(true)
  }

  const addCartCloseHandler = () => {
    setIsCartShown(false)
  }
  return (
    <CartProvider>
      {isCartShown && <Cart onClose={addCartCloseHandler} />}
      <Header onCartShow={addCartShownHandler} />
      <main>
      <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
