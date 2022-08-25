
import React from 'react'


function Table ({ dataTable, column})  {

    // console.log("inbills",dataTable);
    return(
        <table>
            <thead>
                <tr>
                    {column.map((item,index) => <TableHeadItem item={item} />)}
                </tr>
            </thead>
            <tbody>
                {dataTable.map((item,index) => <TableRow key={item.id} item={item} column={column}/>)}
            </tbody>
        </table>
    )
}

const TableHeadItem = ({ item }) => <th>{item.heading}</th>
const TableRow = ({ item, column}) => (
    <tr>
        {column.map((columnItem, index) =>{
            return <td>{item[`${columnItem.value}`]}</td>
        })}
    </tr>
)
export default Table