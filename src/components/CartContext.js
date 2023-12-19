/*import React,{createContext, useReducer} from "react";
import {CartReducer} from "./CartReducercartReducer"
export const CartContext = createContext()

export const CartContextProvider = (prop)=>{
    const [cart, dispatch] = useReducer(CartReducer,{shoppingCart: [], Totalprice: 0, TotalQty:0})
    return(
        <CartContext.Provider value=({ ...cart, dispatch})>
            {prop.children}
        </CartContext.Provider>
    )
}*/