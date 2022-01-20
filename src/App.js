import './App.css';
import { Link, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Person from './components/Person';
import Planet from './components/Planet';


function App() {
  return (
    <div className="App">
      <h2> ⭐🌟⭐ Luke APIwalker ⭐🌟⭐</h2>

      <Switch>
        <Route path="/planets/:number">
          <Planet />
        </Route>

        <Route path="/people/:number">
          <Person />
        </Route>
        
        <Route path="/">
          <Home />
        </Route>
      </Switch>
        
    </div>
  );
}

export default App;
