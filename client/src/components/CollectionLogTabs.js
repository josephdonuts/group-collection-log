import React from "react";

const CollectionLogTabs = (props) => {
    return (
    <div className="collection-log-tabs">
        <div className="collection-log-tab">
            <span className="tab-text">Bosses</span>
        </div>
        <div className="collection-log-tab">
            <span className="tab-text">Raids</span>
        </div>
        <div className="collection-log-tab">
            <span className="tab-text">Clues</span>
        </div>
        <div className="collection-log-tab">
            <span className="tab-text">Minigames</span>
        </div>
        <div className="collection-log-tab">
            <span className="tab-text">Other</span>
        </div> 
    </div>
    )
}

export default CollectionLogTabs;