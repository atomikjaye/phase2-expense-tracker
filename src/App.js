// import logo from './logo.svg';
import { useEffect, useState } from 'react'
import { Container } from 'semantic-ui-react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/DashBoard/Dashboard';
import Expenses from './components/Transactions/Expenses';
import Income from './components/Transactions/Income';
import TransactionPage from './components/Transactions/TransactionPage'
import Navbar from './components/NavBar/Navbar';
import AddForm from './components/Form/Form'
import trackData from "./db.json"
import './App.css';

function App() {
  const [transactionList, setTransactionList] = useState(trackData.transactions)

  useEffect(() => {
    fetch(`http://localhost:3001/transactions`)
      .then(r => r.json())
      .then(data => {
        setTransactionList(data)
        // console.log(transactionList)
      })
  }, [])


  function addTransaction(newTrans) {
    const newTransactions = [...transactionList, newTrans]
    setTransactionList(newTransactions)
  }

  return (
    <>
      <Navbar />
      <Container >
        <Routes>
          <Route path="/" element={<Dashboard data={trackData} />} />
          <Route path="/expenses" element={<Expenses data={trackData} />} />
          <Route path="/income" element={<Income data={trackData} />} />
          <Route path="transactions" element={<TransactionPage transList={transactionList} />} />
          <Route path="form" element={<AddForm onNewTrans={addTransaction} transactionList={transactionList} setTransactionList={setTransactionList} />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
