import React from "react";
import CollectionLogEntry from "./CollectionLogEntry";

const CollectionLogEntryList = (props) => {
    const { currentTab, collectionLog } = props;

    const entries = Object.keys(collectionLog[currentTab]).map(entry => {
        return (
            <CollectionLogEntry 
            entry={entry} />
        )
    })
    return (
        <div className="collection-log-item-list">
            {entries}
        </div>
    )
}

export default CollectionLogEntryList;