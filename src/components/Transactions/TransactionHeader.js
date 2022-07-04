import { Table } from 'semantic-ui-react'

function TransactionHeader() {
  return (
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Date</Table.HeaderCell>
        <Table.HeaderCell>Company</Table.HeaderCell>
        <Table.HeaderCell>Amount</Table.HeaderCell>
        <Table.HeaderCell>Type</Table.HeaderCell>
        <Table.HeaderCell>Account</Table.HeaderCell>
        <Table.HeaderCell>Category</Table.HeaderCell>
        <Table.HeaderCell>Notes</Table.HeaderCell>
        {/* <Table.HeaderCell>Edit</Table.HeaderCell> */}
      </Table.Row>
    </Table.Header>
  )
}

export default TransactionHeader