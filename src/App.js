import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import HomeView from './views/Home';
import JobForm from './views/JobForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path="/" exact component={HomeView} />
            <Route path="/registro" exact component={JobForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
