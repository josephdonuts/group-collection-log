import React from "react";
import icons from "../assets/data/item-icons.json";

const Item = (props) => {
    const { id, name, obtained, quantity } = props.item;
    
    return (
        <a className="item-tile" href={`https://oldschool.runescape.wiki/w/${name.replace(/ /g, '_')}`} >
            <span className="item-quantity-text">{quantity}</span>
            <img className="item-icon" src={`data:image/jpeg;charset=utf-8;base64,${icons[id]}`} alt={name} />
        </a>
    )
}

export default Item;