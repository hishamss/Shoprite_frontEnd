import Landing from "./pages/Landing";
import Home from "./pages/Home";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
function App() {
  return (
    <div className="App" style={{ height: "100%" }}>
      <Router>
        <Switch>
          <Route exact path="/login" component={Landing} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
