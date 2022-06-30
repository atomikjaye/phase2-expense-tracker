import {
  Button,
  Form,
  Input,
  Radio,
  TextArea,
  Dropdown
} from 'semantic-ui-react'
import { useState } from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


function AddForm({ onNewTrans }) {




  const [date, setDate] = useState(new Date())
  const [company, setCompany] = useState("")
  const [amount, setAmount] = useState(0)
  const [type, setType] = useState('income')
  const [account, setAccount] = useState('tdbank')
  const [category, setCategory] = useState('Amazon')
  const [notes, setNotes] = useState('')
  // const [tags, setTags] = useState('')

  // https://stackoverflow.com/questions/1726630/formatting-a-number-with-exactly-two-decimals-in-javascript
  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  function handleSubmit(e) {
    e.preventDefault()

    const newTransaction = {
      date: date,
      amount: parseFloat(amount),
      account: account,
      category: category,
      type: type,
      notes: notes
    }

    fetch(`http://localhost:3001/transactions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTransaction)
    })
      .then(r => r.json())
      .then(data => console.log(data))

    console.log("New Trans", newTransaction)
  }

  function addNewTransaction() {
  }

  // have to use semantic's data object
  function handleChange(e, data) {
    if (data.name === 'typeGroup') {
      setType(data.value)
    } else if (data.name === 'accountGroup') {
      setAccount(data.value)
    } else if (e.target.name === 'notes') {
      setNotes(e.target.value)
    } else if (data.name === 'category') {
      setCategory(data.value)
    }




  }

  const options = [
    { key: 1, text: 'Amazon', value: 'Amazon', description: 'Income' },
    { key: 2, text: 'Freelance', value: 'Freelance', description: 'Income' },
    { key: 3, text: 'Etsy', value: 'Etsy', description: 'Income' },
    { key: 4, text: 'Gifts', value: 'Gifts', description: 'Income' },
    { key: 5, text: 'Student Loans', value: 'Student Loans', description: 'Expenses' },
    { key: 6, text: 'Car Maintenance', value: 'Car Maintenance', description: 'Expenses' },
    { key: 7, text: 'Groceries', value: 'Groceries', description: 'Expenses' },
    { key: 8, text: 'Clothing', value: 'Clothing', description: 'Expenses' },
    { key: 9, text: 'Social', value: 'Social', description: 'Expenses' },
    { key: 10, text: 'Home Improvement', value: 'Home Improvement', description: 'Expenses' },
    { key: 11, text: 'Self Care', value: 'Self Care', description: 'Expenses' },
    { key: 12, text: 'Subscriptions', value: 'Subscriptions', description: 'Expenses' },
  ]

  return (
    <Form onSubmit={handleSubmit}>

      <Form.Field >
        <label htmlFor="date">Date of Purchase</label>
      </Form.Field>
      <Form.Field
        control={DatePicker}
        name='date'
        selected={date}
        onChange={(date: Date) => setDate(date)}
      />
      <Form.Field>
        <label htmlFor="company">Company</label>
      </Form.Field>
      <Form.Field
        name="company"
        control={Input}
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder='Company'
      />
      <Form.Field>
        <label htmlFor="amount">Amount</label>
      </Form.Field>
      <Form.Field
        name="amount"
        control={Input}
        type='number'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder='20.00'
      />
      {/* For Type */}

      {/* FOR FORM */}

      <Form.Field>
        <label htmlFor="typeGroup">Choose Transaction Type</label>
      </Form.Field>
      <Form.Field>
        <Radio
          label='Income'
          name='typeGroup'
          value='income'
          checked={type === 'income'}
          onChange={(e, data) => handleChange(e, data)}
        />
      </Form.Field>
      <Form.Field>
        <Radio
          label='Expenses'
          name='typeGroup'
          value='expenses'
          checked={type === 'expenses'}
          onChange={(e, data) => handleChange(e, data)}
        />
      </Form.Field>

      {/* FOR FORM */}

      <Form.Field>
        <label htmlFor="accountGroup">Choose Account</label>
      </Form.Field>
      <Form.Field>
        <Radio
          label='TD Bank'
          name='accountGroup'
          value='tdbank'
          checked={account === 'tdbank'}
          onChange={(e, data) => handleChange(e, data)}
        />
      </Form.Field>
      <Form.Field>
        <Radio
          label='Chase'
          name='accountGroup'
          value='chase'
          checked={account === 'chase'}
          onChange={(e, data) => handleChange(e, data)}
        />
      </Form.Field>

      <Form.Field>
        <label htmlFor="category">Choose Transaction Category</label>
      </Form.Field>
      <Form.Field>
        <Dropdown
          selection
          placeholder='Choose Category'
          name='category'
          options={options}
          value={category}
          onChange={(e, data) => handleChange(e, data)} />
      </Form.Field>

      <Form.Field>
        <label htmlFor='notes'>Notes</label>
      </Form.Field>
      <Form.Field
        name="notes"
        control={TextArea}
        // label='Notes'
        value={notes}
        onChange={handleChange}
        placeholder='Write about your transaction.'
      />

      <Form.Field control={Button}>Submit</Form.Field>
    </Form>
  )
}

export default AddForm

