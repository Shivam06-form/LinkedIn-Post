import React, { useState } from 'react'
import './RenderItems.css'
import ListItems from '../../src/Items.json' ////JSON FILE


const RenderItems = () => {
    const [isCart, setIsCart] = useState([]);

    let isList = []

    const ADD_TO_CART = (item) => {
        isList = isCart
        /////////ADD ITEMS TO CART ////////
        isList = isList.concat(item)
        setIsCart(isList);
    }


    const REMOVE_FROM_CART = (item) => {
        ///////////FILTER ITEMS that are not in Cart ////////////
        const removeItem = isCart.filter((cartItem) => cartItem.id !== item.id)
        setIsCart(removeItem)
    }

    ///////////////////////// RENDER LIST ITEMS //////////////////////////
    const RenderListItems = ListItems.GAMES.map((item) => {

        //////////FILTER ITEMS IS IN THE CART 🛒 ////////

        const filterItems = isCart.filter((i) => i.id === item.id)

        return (
            <div className='list-item' key={item.id}>
                <img src={item.imageUrl} alt={item.name} />
                <h4>{item.name}</h4>
                {!filterItems[0] && <button onClick={() => {
                    ADD_TO_CART(item)
                }}>ADD TO CART</button>}
                {filterItems[0] && <button style={{ backgroundColor: "red" }}
                    onClick={() => REMOVE_FROM_CART(item)}
                >REMOVE FROM CART</button>}
            </div>
        )
    })

    return (
        <div className='Item'><h1>
            <div className='items-container'>
                {RenderListItems}
            </div>
        </h1>
        </div>
    )
}

export default RenderItems