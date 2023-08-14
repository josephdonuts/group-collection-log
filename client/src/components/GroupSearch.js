import React, {useState} from "react";

const GroupSearch = (props) => {

    const [searchTerm, setSearchTerm] = useState("");
    //controlled search term is for real-time search (future feature)
    //it will show tiles matching the search term to database users

    //---FOR SINLGE USER LOG-------------------------
    // const getUserLog = async (username) => {
    //     const data = await fetch(`/api/v1/log/${username}`)
    //     const json = await data.json()
    //     console.log(json)
    // }

    const handleSearch = (event) => {
        event.preventDefault();
        //getUserLog(searchTerm);
    }

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        //load in user tiles from search real-time (future feature)
    }

    //TODO - format both inputs side-by-side OR componentize
    return (
        <div className="group-search-container">
            <h2>Group Search</h2>
            <form>
                <h4>Group Size</h4>
                <label for="group-size" name="group-size" ></label>
                <select name="group-size" id="group-size">
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <h4>Group Name</h4>
                <label for="group-search"></label>
                <input  placeholder="Enter group name..."
                        type="text"
                        id="group-search"
                        name="group-search"
                        value={searchTerm}
                        onChange={handleChange}/>
                <input type="button" value="Search" onClick={handleSearch} />
            </form>
        </div>
    )
}

export default GroupSearch;