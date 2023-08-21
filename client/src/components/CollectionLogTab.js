import React from "react";

const CollectionLogTab = (props) => {
    const { tabName, setCurrentEntry, setCurrentTab, collectionLog } = props;

    const handleClick = () => {
        setCurrentTab(tabName)
        console.log(Object.keys(collectionLog[tabName])[0])
        setCurrentEntry(Object.keys(collectionLog[tabName])[0])
    }

    return (
        <div className="collection-log-tab" onClick={handleClick}>
            <span className="tab-text">{tabName}</span>
        </div> 
    )
}

export default CollectionLogTab;