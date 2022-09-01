
import React from 'react'
import Table  from 'react-bootstrap/Table'
import TableRow from './TableRow'





function TableSheet ({ dataTable, column})  {
    

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


    // console.log("table",totalColumnMinPayment);



    return(
        <>
        <Table striped bordered hover>
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

        </Table>
        {/* <AccountPage dataTable={dataTable}/> */}

        </>)
}

const TableHeadItem = ({ item }) => <th>{item.heading}</th>


export default TableSheet