import { Table } from 'semantic-ui-react'

function Transaction({ id, date, company, amount, type, account, category, notes }) {
  return (
    <Table.Row key={id}>
      <Table.Cell>{date}</Table.Cell>
      <Table.Cell>{company}</Table.Cell>
      <Table.Cell>{"$" + amount.toFixed(2)}</Table.Cell>
      <Table.Cell>{type}</Table.Cell>
      <Table.Cell>{account}</Table.Cell>
      <Table.Cell>{category}</Table.Cell>
      <Table.Cell>{notes}</Table.Cell>
    </Table.Row>
  )

}

export default Transaction