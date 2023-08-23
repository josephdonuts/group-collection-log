import React, { useState, useEffect } from "react";
import CollectionLogEntryList from "./CollectionLogEntryList";
import CollectionLogTabs from "./CollectionLogTabs";
import CollectionLogItemList from "./CollectionLogItemList";

const CollectionLog = (props) => {

const [collectionLog, setCollectionLog] = useState({});
const [currentTab, setCurrentTab] = useState("Bosses");
const [currentEntry, setCurrentEntry] = useState("Abyssal Sire");

const searchTerm = props.match.params.groupName

const getGroup = async () => {
    const response = await fetch(`/api/v1/group/${searchTerm}`)
    const responseData = await response.json()
        console.log(responseData)           // CONSOLE LOG CONSOLE LOG CONSOLE LOG CONSOLE LOG CONSOLE LOG CONSOLE LOG
    setCollectionLog({
        ...responseData.groupedLog.collectionLog.tabs,
        uniques: responseData.uniqueItems,
        prestige: responseData.prestige
    })
}

useEffect(() => {
    getGroup()
}, [])
    const prestigeIcon = <img src="https://www.runescape.com/img/rsp777/grand_exchange_icons/other/other_prestige.png" alt="prestige icon" />
    if (Object.keys(collectionLog).length > 0) {
        return (
            <div className="collection-log-container">
                <div className="collection-log-menu">
                    <h2>
                    {`${collectionLog.prestige ? prestigeIcon : ''}` } 
                    {`${searchTerm}`} Collection Log
                    </h2>
                    <p>Total Uniques Obtained: {collectionLog.uniques}</p>
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