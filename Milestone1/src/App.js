import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './views/Home'
import Program from './views/Program'
import Program1 from './views/programs/Program1'
import Program2 from './views/programs/Program2'
import Program3 from './views/programs/Program3'
import Program4 from './views/programs/Program4'
import Program5 from './views/programs/Program5'
import Events from './views/Events'
import About from './views/About'
import Login from './views/Login'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/program' exact component={Program} />
        <Route path='/program1' exact component={Program1} />
        <Route path='/program2' exact component={Program2} />
        <Route path='/program3' exact component={Program3} />
        <Route path='/program4' exact component={Program4} />
        <Route path='/program5' exact component={Program5} />
        <Route path='/events' exact component={Events} />
        <Route path='/about' exact component={About} />
        <Route path='/login' exact component={Login} />

      </Switch>
    </Router>
    </>
  );
}

export default App;
