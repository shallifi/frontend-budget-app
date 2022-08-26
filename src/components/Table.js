
import React from 'react'
import Bills from './Bills'
import EditBillModal from './EditBillModal'
import TableRow from './TableRow'



function Table ({ dataTable, column,handleDelete, setShowEditBillModal})  {

    // console.log("inbills",dataTable);
    return(
        <>
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

        </>)
}

const TableHeadItem = ({ item }) => <th>{item.heading}</th>
// const TableRow = ({ item, column}) => (
//     <>
//     <tr>
//         {column.map((columnItem, index) =>{
//             return <td>{item[`${columnItem.value}`]}</td>
//         })}
//             <button className='me-2'onClick={() => setShowEditBillModal(bill.id)}>Edit</button>
//             <button className='me-2' onClick={()=>handleDelete(bill.id)} >Delete</button>
//     </tr>
//     <EditBillModal item={item}/>
//     </>
// )

export default Table