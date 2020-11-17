import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './state';

import HomeView from './views/Home'
import JobForm from './views/JobForm'

import WebSocketProvider from './WebSocket'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

function App() {
  return (
    <div style={{ backgroundColor: "#4d98e0", height: "100vh" }}>
      <Provider store={store}>
        <WebSocketProvider>
          <Router>
            <Switch>
                <Route path="/" exact component={HomeView} />
                <Route path="/registro" exact component={JobForm} />
            </Switch>
          </Router>
        </WebSocketProvider>
      </Provider>
    </div>
  );
}

export default App;
