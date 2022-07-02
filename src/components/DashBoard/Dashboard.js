// Dashboard will contain overviews of money
import DashDisplay from './DashDisplay';
import Transaction from '../Transactions/Transaction'
// src/components/DashBoard/Dashboard.js
// src/components/Transactions/Transaction.js
import moment from 'moment'
import Moment from 'react-moment'
import 'moment-timezone'
import { Button, Card, Image, Container, Header, Table, Divider, Icon } from 'semantic-ui-react'
// Total Income recieved, total expenses, total left.
// must get from database
function Dashboard({ data }) {
  console.log(data.income.total)
  const displayTrans = data.transactions.map((trans) => {
    console.log("Hi")
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

        <Card.Group centered grid>
          <DashDisplay title={"Income"} btnColor={"green"} displayAmount={data.income.total} />
          <DashDisplay title={"Expenses"} btnColor={"red"} displayAmount={data.expenses.total} />
          <DashDisplay title={"Balance"} btnColor={"orange"} displayAmount={data.income.total - data.expenses.total} />
        </Card.Group>
        <Divider horizontal>
          <Header as='h4'>
            <Icon name='tag' />
            Recent Transactions
          </Header>
        </Divider>

        <Table>
          {displayTrans}
        </Table>



        {/* <p>This is a DashBoard {data.income.total} - {data.expenses.total} = {data.income.total - data.expenses.total}</p> */}
      </Container>
    </>
  )
}

export default Dashboard