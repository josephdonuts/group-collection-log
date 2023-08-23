import React from "react";
import icons from "../assets/data/item-icons.json";

const Item = (props) => {
    const { id, name, obtained, quantity } = props.item;
    
    return (
        <div className="item-tile">
            <a href={`https://oldschool.runescape.wiki/w/${name.replace(/ /g, '_')}`} >
                {name}
            </a>
            {quantity}
            <img src={`data:image/jpeg;charset=utf-8;base64,${icons[id]}`} alt={name} />
        </div>
    )
}

export default Item;