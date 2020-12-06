import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Logout from "./pages/Logout";
import NavBar from "./components/NavBar";
import React, { useState, useEffect } from "react";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
// to get user data from the sotred cookie on the browser
import Cookies from "js-cookie";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    if (Cookies.get("username") !== undefined) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <div className="App" style={{ height: "100%" }}>
      {/* Display navbar only if the user is logged in  */}
      {isAuthenticated && <NavBar />}
      <Router>
        <Switch>
          {isAuthenticated ? (
            <Redirect from="/" to="/home" exact />
          ) : (
            <Redirect from="/" to="/login" exact />
          )}
          {!isAuthenticated && (
            <Route exact path="/login" component={Landing} />
          )}
          {isAuthenticated && <Route exact path="/home" component={Home} />}
          {isAuthenticated && <Route exact path="/logout" component={Logout} />}
          {isAuthenticated && <Route path="/" component={Home} />}
          {!isAuthenticated && <Route path="/" component={Landing} />}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
