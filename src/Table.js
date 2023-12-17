import React from "react";
import TableRow from './TableRow'

const Table = () => {
    const tableArrays = [
        ["Laptop", "Electronics", "1200", "15%"],
        ["Dresser", "Furniture", "400", "20%"],
        ["Headphones", "Electronics", "150", "10%"],
        ["Sofa", "Furniture", "800", "25%"]
    ];
    return (
        <div className="mx-auto flex justify-center items-center">
            <table className="table-auto">
                <thead>
                <tr>
                    <th className="px-4 py-2">Product</th>
                    <th className="px-4 py-2">Category</th>
                    <th className="px-4 py-2">Price</th>
                    <th className="px-4 py-2">Discount</th>
                </tr>
                </thead>
                <tbody>
                {tableArrays.map((tableArray, id) => <TableRow key={id} tableArray={tableArray} />)}
                </tbody>
            </table>
        </div>

    );
}
export default Table;