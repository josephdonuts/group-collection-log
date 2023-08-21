import React, { useState, useEffect } from "react";
import CollectionLogEntry from "./CollectionLogEntry";

const CollectionLogEntryList = (props) => {
    const { setCurrentEntry, currentTab, collectionLog } = props;

    const entries = Object.keys(collectionLog[currentTab]).map(entry => {
        return (
            <CollectionLogEntry 
            key={entry}
            entry={entry}
            setCurrentEntry={setCurrentEntry} />
        )
    })

    return (
        <div className="collection-log-entry-list">
            {entries}
        </div>
    )
}

export default CollectionLogEntryList;