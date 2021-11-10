import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from './layouts/default/NavBar'
import { MappedRoutes } from './pages'

function App() {
  return (
    <Router>
      <NavBar/>
      <MappedRoutes/>
    </Router>
  );
}

export default App;
