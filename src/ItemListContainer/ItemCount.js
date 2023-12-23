import {useState} from 'react';


const ItemCount= ({stock,initial, onAdd})=>{
    const[quantity, setQuantity]= useState(initial)

    const increment = ()=> {
        if(quantity< stock){
            setQuantity(quantity+1)
        }
    }
    const decrement = ()=> {
        if(quantity > 1){
            setQuantity(quantity -1)
        }
    }
    return(
        <div className="contenedor">
            <div className="control">
                <button className="resta" onClick={decrement}>-</button>
                <h4 className="Number">{quantity}</h4>
                <button className="suma" onClick={increment}>+</button>
            </div>
            <div>
            <button className="button1" onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
            </div>
        </div>
    )
}
export default ItemCount;