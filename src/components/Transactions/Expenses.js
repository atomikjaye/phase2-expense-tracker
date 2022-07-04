import Transaction from '../Transactions/Transaction'
import TransactionFilter from '../Transactions/TransactionFilter'
import { Table } from 'semantic-ui-react'
import moment from 'moment'
import Moment from 'react-moment'
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
  })

  return (
    <>
      <TransactionFilter />
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Company</Table.HeaderCell>
            <Table.HeaderCell>Amount</Table.HeaderCell>
            <Table.HeaderCell>Type</Table.HeaderCell>
            <Table.HeaderCell>Account</Table.HeaderCell>
            <Table.HeaderCell>Category</Table.HeaderCell>
            <Table.HeaderCell>Notes</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {displayTrans}
        </Table.Body>
      </Table>
    </>
  )
}

export default Expenses