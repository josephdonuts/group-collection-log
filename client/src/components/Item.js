import React from "react";

const Item = (props) => {
    const { id, name, obtained, quantity } = props.item;

    return (
        <div className="item-tile">
            {name} {quantity}
        </div>
    )
}

export default Item;