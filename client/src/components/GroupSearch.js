import React from "react";

const GroupSearch = (props) => {
    return (
        <div className="group-search-container">
            <h2>Group Search</h2>
            <form>
                <label htmlFor="group-search">Search for a group</label>
                <input placeholder="Enter username..." type="text" id="group-search" name="group-search" />
                <input type="submit" value="Search" />
            </form>
        </div>
    )
}

export default GroupSearch;