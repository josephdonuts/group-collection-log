import React, {useState} from "react";
import { Link } from "react-router-dom";
import CollectionLog from "./CollectionLog";

const GroupSearch = (props) => {

    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }

    return (
        <div className="group-search-container">
            <h2>Group Search</h2>
            <form>
                <label style={{color: "white"}} htmlFor="group-type" >Hardcore status: 
                <div className="switch-field">
                    <input type="radio" id="radio-one" name="switch-one" value={true} />
                    <label style={{color: "white"}} htmlFor="radio-one">Yes</label>
                    <input type="radio" id="radio-two" name="switch-one" value={false} />
                    <label style={{color: "white"}} htmlFor="radio-two">No</label>
	            </div>
                </label>
                <label htmlFor="group-search"></label>
                <input  placeholder="Enter group name..."
                        type="text"
                        id="group-search"
                        name="group-search"
                        onChange={handleChange} />
                <Link to={`/group/log/${searchTerm}`}>
                    <p>Search</p>
                </Link>
            </form>
            {/* {searchTile} ??? */}
        </div>
    )
}

export default GroupSearch;