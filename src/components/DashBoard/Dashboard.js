// Dashboard will contain overviews of money
import DashDisplay from './DashDisplay';
import Transaction from '../Transactions/Transaction'
import TransactionHeader from '../Transactions/TransactionHeader'
// src/components/DashBoard/Dashboard.js
// src/components/Transactions/Transaction.js
import moment from 'moment'
import 'moment-timezone'
import { Card, Container, Header, Table, Divider, Icon } from 'semantic-ui-react'
// Total Income recieved, total expenses, total left.
// must get from database
function Dashboard({ data }) {

  const totalExpensesTrans = data.transactions.filter(trans => trans.type === 'expenses')
  const totalIncomeTrans = data.transactions.filter(trans => trans.type === 'income')


  const totalIncome = Object.values(totalIncomeTrans).reduce((prev, { amount }) => prev + amount, 0)
  const totalExpenses = Object.values(totalExpensesTrans).reduce((prev, { amount }) => prev + amount, 0)

  // console.log("Total Income", totalIncome)
  // console.log("Total Expenses", totalExpenses)
  // console.log(data.income.total)
  let transactions = data.transactions.slice(-10)
  const displayTrans = transactions.map((trans) => {
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
    />
  })

  return (
    <>
      <Container textAlign='center'>
        <Header as='h1'>Expense Tracker</Header>
        <Card.Group centered grid>
          <DashDisplay title={"Income"} btnColor={"green"} linkName={"/income"} displayAmount={totalIncome} />
          <DashDisplay title={"Expenses"} btnColor={"red"} linkName={"/expenses"} displayAmount={totalExpenses} />
          <DashDisplay title={"Balance"} btnColor={"orange"} linkName={"/"} displayAmount={totalIncome - totalExpenses} />
        </Card.Group>

        <Divider horizontal>

          <Header as='h4'>
            <Icon name='tag' />
            Recent Transactions
          </Header>
        </Divider>


        {/* <TransactionFilter /> */}
        <Table celled>
          <TransactionHeader />
          <Table.Body>
            {displayTrans}
          </Table.Body>
        </Table>



        {/* <p>This is a DashBoard {data.income.total} - {data.expenses.total} = {data.income.total - data.expenses.total}</p> */}
      </Container>
    </>
  )
}

export default Dashboard