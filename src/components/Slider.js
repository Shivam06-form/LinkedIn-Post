import React, { useState } from 'react'
import './Slider.css'
import ListItems from '../../src/Items.json' ////JSON FILE

const Slider = () => {

    //////////// Getting Last 7 items from ListItems JSON FILE ////////
    const List = (ListItems.GAMES.slice(ListItems.GAMES.length - 7, ListItems.GAMES.length))
    const [slide, setSlide] = useState(0);


    const RenderList = List.map((list, i) => {
        return (
            <div key={list.id} className='list-card' style={{
                transform: `translateX(${-100 * slide}%)`
            }}>
                <img src={list.imageUrl} alt={list.name} />
                <h4>{list.name}</h4>
            </div>
        )
    })


    return (
        <div className='slider'>
            <button className='arrow'
                onClick={() => {
                    setSlide(slide - 1)

        ///////////  If first element is selected. Then it will go on to last element//////////
                    if (slide === 0) {
                        setSlide(List.length - 1)
                    }
                }}
            >⏮</button>
            <div className='list-conatiner'> {RenderList}</div>
            <button
                className='arrow' onClick={() => {
                    setSlide(slide + 1)

///////////  If last element is selected. Then it will go on to first element//////////                
                    if (slide >= List.length - 1) {
                        setSlide(0)
                    }
                }}>⏭</button>
        </div>
    )
}

export default Slider