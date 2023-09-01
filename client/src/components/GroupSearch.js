import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const GroupSearch = (props) => {

    const [searchData, setSearchData] = useState({});
    console.log(searchData)
    console.log(searchData)
    const handleChange = (event) => {
        setSearchData({
            ...searchData,
            [event.target.name]: (event.target.value).toLowerCase()
        });
    }
    useEffect(() => {
    }, [])

    return (
        <div className="group-search-container">
            <h3>Group Search</h3>
            <form>
                <label style={{color: "white"}} htmlFor="group-type" >Hardcore status: 
                <div className="switch-field">
                    <input type="radio" id="radio-one" name="isHardcore" value={true} onChange={handleChange} />
                    <label style={{color: "white"}} htmlFor="radio-one">Yes</label>
                    <input type="radio" id="radio-two" name="isHardcore" value={false} onChange={handleChange} defaultChecked />
                    <label style={{color: "white"}} htmlFor="radio-two">No</label>
	            </div>
                </label>
                <label htmlFor="searchTerm"></label>
                <input  placeholder="Enter group name..."
                        type="text"
                        className="search-term"
                        id="searchTerm"
                        name="searchTerm"
                        onChange={handleChange} />
                <Link to={`/group/log/${searchData.searchTerm}`} >
                    <p className="search-button">Search</p>
                </Link>
            </form>
            {/* {searchTile} ??? */}
        </div>
    )
}

export default GroupSearch;