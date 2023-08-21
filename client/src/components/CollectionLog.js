import React, { useState, useEffect } from "react";
import CollectionLogEntryList from "./CollectionLogEntryList";
import CollectionLogTabs from "./CollectionLogTabs";
import CollectionLogItemList from "./CollectionLogItemList";

const CollectionLog = (props) => {

const [collectionLog, setCollectionLog] = useState({});
const [currentTab, setCurrentTab] = useState("Bosses");
const [currentEntry, setCurrentEntry] = useState("Abyssal Sire");
console.log(currentEntry)
const searchTerm = props.match.params.groupName

const getGroup = async () => {
    const response = await fetch(`/api/v1/group/${searchTerm}`)
    const responseData = await response.json()
        console.log(responseData)
    setCollectionLog(responseData.groupedLog.collectionLog.tabs)
}
useEffect(() => {
    getGroup()
}, [])

    if (Object.keys(collectionLog).length > 0) {
        return (
            <div className="collection-log-container">
                <div className="collection-log-menu">
                    <h2>{`${searchTerm}`} Collection Log</h2>
                    <CollectionLogTabs
                    currentTab={currentTab}
                    setCurrentTab={setCurrentTab}
                    setCurrentEntry={setCurrentEntry}
                    collectionLog={collectionLog} />
                    <div className="collection-log-tab-content">
                        <CollectionLogEntryList
                        collectionLog={collectionLog}
                        currentTab={currentTab}
                        setCurrentEntry={setCurrentEntry} />

                        <CollectionLogItemList
                        collectionLog={collectionLog}
                        currentTab={currentTab}
                        currentEntry={currentEntry} />
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