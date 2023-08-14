import React from "react";

const SearchTile = (props) => {
        const groupName = props.name;
        return (
            <div className="search-result-tile">
                <h3>{groupName}</h3>
                {props.players}
            </div>
        )
}

export default SearchTile;