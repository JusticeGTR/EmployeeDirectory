import React from "react";

function Search(props) {

    return (
        <>
            <input onChange={props.handleInputChange} placeholder="Search" />
        </>
    )
}

export default Search;