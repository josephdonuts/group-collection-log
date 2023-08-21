import React from "react";
import CollectionLogTab from "./CollectionLogTab";

const CollectionLogTabs = (props) => {
    const { currentTab, setCurrentTab } = props;
    const tabs = ["Bosses", "Raids", "Clues", "Minigames", "Other"]
    const tabComponents = tabs.map(tab => {
        return (
            <CollectionLogTab 
            tabName={tab}
            currentTab={currentTab} 
            setCurrentTab={setCurrentTab} />
        )
    })
    return (
    <div className="collection-log-tabs">
        {tabComponents}
    </div>
    )
}

export default CollectionLogTabs;