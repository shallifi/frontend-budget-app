
import React from 'react'
import AccountPage from './AccountPage'
// import AccountPage from './AccountPage'
// import Bills from './Bills'
// import EditBillModal from './EditBillModal'
import TableRow from './TableRow'
// import { Table } from "react-bootstrap";




function Table ({ dataTable, column})  {
    

// this map works but posts p tag
//    const testingMap = dataTable.map((item,index) => <p key={item.id} item={item.min_payment}></p>)

// const totalColumn = testingMap.reduce(function (acc, obj){return acc + obj;},0);

// map that works 
const minPayMap = dataTable.map(mPay => mPay.min_payment)
const payOffMap = dataTable.map(mPay => mPay.payoff_amount)
const paymentMap = dataTable.map(mPay => mPay.payment)

// this reduce works
const totalColumnMinPayment = minPayMap.reduce((acc, item) => (acc += item), 0);
const totalColumnPayoffAmount = payOffMap.reduce((acc, item) => (acc += item), 0);
const totalColumnPayment = paymentMap.reduce((acc, item) => (acc += item), 0);


    console.log("table",totalColumnMinPayment);



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
            <tr>Minimum payment total = ${totalColumnMinPayment}</tr>
            <tr>Payoff Amount total = ${totalColumnPayoffAmount}</tr>
            <tr>Payment total = ${totalColumnPayment}</tr>

        </table>
        {/* <AccountPage dataTable={dataTable}/> */}

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