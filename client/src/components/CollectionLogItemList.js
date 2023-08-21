import React from "react";
import Item from "./Item";

const CollectionLogItemList = (props) => {
    const { currentTab, currentEntry, collectionLog } = props;
    const itemList = collectionLog[currentTab][currentEntry].items.map(item => {
        return (
            <Item 
            item={item}
            key={item.id} />
        )
    })
    return (
        <div className="collection-log-item-list">
            {itemList}
        </div>
    )
}

export default CollectionLogItemList;