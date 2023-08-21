import React from "react";

const CollectionLogTab = (props) => {
    
    const handleClick = () => {
        props.setCurrentTab(props.tabName.toLowerCase())
    }

    return (
        <div className="collection-log-tab" onClick={handleClick}>
            <span className="tab-text">{props.tabName}</span>
        </div> 
    )
}

export default CollectionLogTab;