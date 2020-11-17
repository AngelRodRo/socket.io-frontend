import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import HomeView from './views/Home';
import JobForm from './views/JobForm';

function App() {
  return (
    <div style={{ backgroundColor: "#4d98e0", height: "100vh" }}>
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
