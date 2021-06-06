import React from "react";
import moment from "moment";

function EmpTable(props) {
console.log("reaching the employee table component!")
    return (
        <>

                    <tr key = {props.index}>
                        <td><img src={props.image} alt={props.name} /></td>
                        <td>{props.name}</td>
                        <td>{props.phone}</td>
                        <td>{props.email}</td>
                        <td>{moment(props.dob).format('MM/DD/YYYY')}</td>
                    </tr>

        </>
    )
}

export default EmpTable;