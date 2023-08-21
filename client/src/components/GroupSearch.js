import React, {useState} from "react";
import SearchTile from "./SearchTile";

const GroupSearch = (props) => {

    const [searchTerm, setSearchTerm] = useState("");

    const [group, setGroup] = useState([]);
//    let searchTile;

    const getGroup = async () => {
        const response = await fetch(`/api/v1/group/${searchTerm}`)
        const responseData = await response.json()
        console.log(responseData)
        //setGroup(playerNames)
    }

    const handleSearch = (event) => {
        event.preventDefault();
        getGroup();
    }

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }

    // if(group.length === 0) {
    //     searchTile = <p>Group not found</p>
    // } else {
    //     searchTile = <SearchTile name={searchTerm} players={group.map(player => { return ` ${player} ` })} />
    // }

    return (
        <div className="group-search-container">
            <h2>Group Search</h2>
            <form>
                <label style={{color: "white"}} htmlFor="group-type">Hardcore status: 
                <input type="radio" name="group-type" />
                </label>
                <label htmlFor="group-search"></label>
                <input  placeholder="Enter group name..."
                        type="text"
                        id="group-search"
                        name="group-search"
                        onChange={handleChange} />
                <input type="button" value="Search" onClick={handleSearch} />
            </form>
            {/* {searchTile} */}
        </div>
    )
}

export default GroupSearch;