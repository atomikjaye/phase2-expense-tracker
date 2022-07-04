import Transaction from '../Transactions/Transaction'
import TransactionFilter from '../Transactions/TransactionFilter'
import TransactionHeader from './TransactionHeader'
import { Table } from 'semantic-ui-react'
import moment from 'moment'
import 'moment-timezone'

function Expenses({ data }) {
  const displayTrans = data.transactions.map((trans) => {
    // console.log("Hi")
    if (trans.type === "expenses") {
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
      />
    }
    // return "Nothing found"
  })

  return (
    <>
      {/* <TransactionFilter /> */}
      <Table celled>
        <TransactionHeader />
        <Table.Body>
          {displayTrans}
        </Table.Body>
      </Table>
    </>
  )
}

export default Expenses