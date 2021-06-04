import React from "react";

function TableHeader(props) {

    return (
        <>
            
                <thead className="thead-light">
                    <tr>
                        <th scope="col-sm-2">Image</th>
                        <th scope="col-sm-2">Name</th>
                        <th scope="col-sm-3">Phone</th>
                        <th scope="col-sm-3">Email</th>
                        <th scope="col-sm-2">DOB</th>
                    </tr>
                </thead>

        </>
    )
}

export default TableHeader;