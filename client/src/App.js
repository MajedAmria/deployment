
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Switch>
    <Route exact path="/">
    <Main/>
    </Route>
    <Route path="/api/product/:id">
    <Detail />
    </Route>
    <Route path="/product/:id/edit">
    <Update />
</Route>
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
