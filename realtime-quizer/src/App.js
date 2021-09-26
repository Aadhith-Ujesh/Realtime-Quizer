import './App.css';
import Login from './login';
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
              <Switch> 
               <Route exact path="/">
                  <Login/>
                </Route>
            
              </Switch>
    </div>
  );
}

export default App;
