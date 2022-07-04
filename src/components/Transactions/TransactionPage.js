// import DashDisplay from './DashDisplay';
import { Table } from 'semantic-ui-react'
import Transaction from './Transaction'
import TransactionHeader from './TransactionHeader'
import moment from 'moment'
import 'moment-timezone'

function TransactionPage({ transList, handleEdit }) {
  console.log(transList)
  const transToDisplay = transList.sort((currTrans, prevTrans) => {
    return moment(currTrans.date).diff(moment(prevTrans.date))
  }
  )
  console.log("TRANS", transToDisplay)
  const displayTrans = transToDisplay.map((trans) => {
    // console.log("Hi")
    return <Transaction
      key={trans.id}
      id={trans.id}
      date={moment(trans.date).format('MM/DD/YY')}
      company={trans.company}
      amount={trans.amount}
      type={trans.type}
      account={trans.account}
      category={trans.category}
      notes={trans.notes}
      handleEdit={handleEdit}
    />
  })
  console.log("TRANS", displayTrans)



  return (
    <>
      {/* <TransactionFilter /> */}
      <Table celled>
        <TransactionHeader />
        <Table.Body>
          {displayTrans}
        </Table.Body>
      </Table>
      {/* <p>TRANSACTION PAGE</p> */}
    </>
  )
}

export default TransactionPage