// import logo from './logo.svg';
import { Container } from 'semantic-ui-react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/DashBoard/Dashboard';
import TransactionPage from './components/Transactions/TransactionPage'
import Navbar from './components/NavBar/Navbar';
import Form from './components/Form/Form'
import trackData from "./db.json"
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Container fluid>
        <Routes>
          <Route path="/" element={<Dashboard data={trackData} />} />
          <Route path="transactions" element={<TransactionPage />} />
          <Route path="form" element={<Form />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
