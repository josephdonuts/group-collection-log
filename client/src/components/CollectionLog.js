import React, { useState, useEffect } from "react";
import CollectionLogEntryList from "./CollectionLogEntryList";
import CollectionLogTabs from "./CollectionLogTabs";
import CollectionLogEntry from "./CollectionLogEntry";

const CollectionLog = (props) => {

const [collectionLog, setCollectionLog] = useState({});
const [currentTab, setCurrentTab] = useState("bosses");

const searchTerm = props.match.params.groupName
console.log(searchTerm)
const getGroup = async () => {
    const response = await fetch(`/api/v1/group/${searchTerm}`)
    const responseData = await response.json()
    console.log(responseData)
    setCollectionLog(responseData)
}
useEffect(() => {
    getGroup()
}, [])

    if (Object.keys(collectionLog).length > 0) {
        return (
            <div className="collection-log-container">
                <div className="collection-log-menu">
                    <h2>{`${searchTerm}`} Collection Log</h2>
                    <CollectionLogTabs collectionLog={collectionLog} />
                    <div className="collection-log-tab-content">
                        <CollectionLogEntryList collectionLog={collectionLog} />
                        <CollectionLogEntry collectionLog={collectionLog} />
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="collection-log-container">
                loading collection log...
            </div>
        )
    }
}

export default CollectionLog;