import './App.css';
import {Header} from "./components/Layout/Header";
import {Meals} from "./components/Meals/Meals";
import {Cart} from "./components/Cart/Cart";
import {useState} from "react";
import {CartProvider} from "./store/CartProvider";

function App() {
    const [cartOpen, setCartOpen] = useState(false);
    const handleCartClose = () => {
        setCartOpen(false);
    }

    const handleCartOpen = () => {
        setCartOpen(true);
    }

    return (
        <CartProvider>
            <>
                <Header onCartOpen={handleCartOpen}/>
                {cartOpen && <Cart onCartClose={handleCartClose}/>}
                <main>
                    <Meals/>
                </main>
            </>
        </CartProvider>
    );
}

export default App;
