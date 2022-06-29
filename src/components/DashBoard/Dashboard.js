// Dashboard will contain overviews of money
import DashDisplay from './DashDisplay';
import { Button, Card, Image } from 'semantic-ui-react'
// Total Income recieved, total expenses, total left.
// must get from database
function Dashboard({ data }) {
  console.log(data.income.total)
  return (
    <>
      <Card.Group>
        <DashDisplay title={"Income"} btnColor={"green"} displayAmount={data.income.total} />
        <DashDisplay title={"Expenses"} btnColor={"red"} displayAmount={data.expenses.total} />
        <DashDisplay title={"Balance"} btnColor={"orange"} displayAmount={data.income.total - data.expenses.total} />
      </Card.Group>
      {/* <p>This is a DashBoard {data.income.total} - {data.expenses.total} = {data.income.total - data.expenses.total}</p> */}
    </>
  )
}

export default Dashboard