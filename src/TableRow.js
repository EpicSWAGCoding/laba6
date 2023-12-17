import React from "react";
import TableCell from './TableCell.js'

const TableRow = ({tableArray}) => {
    return (
        <tr>
            {tableArray.map((item, id) => <TableCell key={id} item={item} />)}
        </tr>

    );

}
export default TableRow;