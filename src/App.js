// import logo from './logo.svg';
import { Container } from 'semantic-ui-react'
import Dashboard from './components/DashBoard/Dashboard';
import trackData from "./db.json"
import './App.css';

function App() {
  return (
    <Container fluid>
      <Dashboard data={trackData} />
    </Container>
  );
}

export default App;
