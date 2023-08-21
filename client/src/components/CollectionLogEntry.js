import React from "react";

const CollectionLogEntry = (props) => {
    const { setCurrentEntry, entry } = props;

    const handleClick = () => {
        setCurrentEntry(entry)
    }

    return (
        <div className="entry-text" onClick={handleClick}>
            {entry}
        </div>
    )
}

export default CollectionLogEntry;