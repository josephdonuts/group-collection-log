import React, { useState, useEffect } from "react";
import CollectionLogEntryList from "./CollectionLogEntryList";
import CollectionLogTabs from "./CollectionLogTabs";
import CollectionLogItemList from "./CollectionLogItemList";

const CollectionLog = (props) => {

const [collectionLog, setCollectionLog] = useState({});
const [currentTab, setCurrentTab] = useState("Bosses");
const [currentEntry, setCurrentEntry] = useState("Abyssal Sire");
const [loading, setLoading] = useState(true);

const searchTerm = props.match.params.groupName

const getGroup = async () => {
    const response = await fetch(`/api/v1/group/${searchTerm}`)
    const responseData = await response.json()  
    if (Object.keys(responseData.groupedLog).length > 0) {
        setCollectionLog({
            ...responseData.groupedLog.collectionLog.tabs,
            uniques: responseData.uniqueItems,
            prestige: responseData.prestige,
            groupExists: responseData.groupExists,
        })
        setLoading(false)
    }
    setLoading(false)
}

useEffect(() => {
    getGroup()
}, [])

    if (loading) {
        return (
            <div className="collection-log-container">
                loading collection log...
            </div>
        )
    } else if (!loading && collectionLog.groupExists) {
        return (
            <div className="collection-log-container">
                <div className="collection-log-menu">
                    <h2>
                        {collectionLog.prestige && <img className='prestige-icon' src='https://www.runescape.com/img/rsp777/hiscores/prestige_icon.svg' />}
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
    } else {
        return (
            <div className="collection-log-container">
                Group not found.
            </div>
        )
    }
}

export default CollectionLog;