import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from './layouts/default/NavBar'
import { MappedRoutes } from './pages'
import { store } from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar/>
        <MappedRoutes/>
      </Router>
    </Provider>
  );
}

export default App;
