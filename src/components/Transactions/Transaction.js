import { Table } from 'semantic-ui-react'

function Transaction({ id, date, company, amount, type, account, category, notes, handleEdit }) {
  return (
    <Table.Row key={id}>
      <Table.Cell>{date}</Table.Cell>
      <Table.Cell>{company}</Table.Cell>
      <Table.Cell>{"$" + amount.toFixed(2)}</Table.Cell>
      <Table.Cell>{type.charAt(0).toUpperCase() + type.slice(1)}</Table.Cell>
      <Table.Cell>{account === "tdbank" ? "Debit" : "Credit"}</Table.Cell>
      <Table.Cell>{category}</Table.Cell>
      <Table.Cell>{notes}</Table.Cell>
      {/* // handle edit, redirect to filled out Form page. */}
      {/* <Table.Cell>Edit</Table.Cell> */}
    </Table.Row>
  )
}

export default Transaction