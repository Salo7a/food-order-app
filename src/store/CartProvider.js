import {CartContext} from "./cart-context";
import {useReducer} from "react";

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        // Update Total Amount
        const newTotal = state.totalAmount + action.item.price * action.item.amount;
        // Try to find item in cart with same id
        const existingItemIndex = state.items.findIndex((item) => item.id === action.item.id)
        let updatedItems;
        // If an item with this id exists, increase its amount instead of adding it as a new item
        if (existingItemIndex >= 0) {
            // Get the existing item
            const existingItem = state.items[existingItemIndex];
            // Increase existing item's amount
            const updatedItem = {...existingItem, amount: existingItem.amount + action.item.amount}
            // Deep copy current state, so as not to edit current state (since it's a reference)
            // and prevent react from detecting the update
            updatedItems = [...state.items];
            updatedItems[existingItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: newTotal
        }
        //  Remove will decrease the amount by 1 each time
    } else if (action.type === 'REMOVE') {
        // Find Index of the item
        const existingItemIndex = state.items.findIndex((item) => item.id === action.id);

        // This check is most likely unnecessary
        if (existingItemIndex >= 0) {
            let existingItem = state.items[existingItemIndex];
            // Reduce total amount
            const newTotal = state.totalAmount - existingItem.price;
            let updatedItems;
            // Remove item from cart if it's the last one of it's kind
            if (existingItem.amount === 1) {
                updatedItems = state.items.filter(item => item.id !== action.id)
            } else {
                // Deep Copy items
                updatedItems = [...state.items];
                existingItem = {...existingItem, amount: existingItem.amount - 1};
                updatedItems[existingItemIndex] = existingItem;
                // TODO: Verify why this reduces the amount by 2, maybe because the amount is a reference to the item in the current state?
                /***
                 * updatedItems[existingItemIndex].amount -= 1
                 */
            }
            return {
                items: updatedItems,
                totalAmount: newTotal
            }
        }
    } else if (action.type === 'EMPTY') {
        return {
            items: [],
            totalAmount: 0
        }
    }
}

export const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    const handleAddToCart = (item) => {
        dispatchCartAction({type: 'ADD', item});
    };

    const handleRemoveFromCart = (id) => {
        dispatchCartAction({type: 'REMOVE', id});
    }
    const handleEmptyCart = (id) => {
        dispatchCartAction({type: 'EMPTY'});
    }
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: handleAddToCart,
        removeItem: handleRemoveFromCart,
        emptyCart: handleEmptyCart
    };

    return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>

}

