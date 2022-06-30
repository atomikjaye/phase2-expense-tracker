// import logo from './logo.svg';
import { Container } from 'semantic-ui-react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/DashBoard/Dashboard';
import TransactionPage from './components/Transactions/TransactionPage'
import Navbar from './components/NavBar/Navbar';
import AddForm from './components/Form/Form'
import trackData from "./db.json"
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Container >
        <Routes>
          <Route path="/" element={<Dashboard data={trackData} />} />
          <Route path="transactions" element={<TransactionPage />} />
          <Route path="form" element={<AddForm />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
