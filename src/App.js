import Landing from "./pages/Landing";
import Home from "./pages/Home";
import NewEmployee from "./pages/NewEmployee";
import NavBar from "./components/NavBar";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
// to get user data from the sotred cookie on the browser
import Cookies from "js-cookie";
function App() {
  const isLoggedIn = () => {
    if (Cookies.get("username") !== undefined) {
      return true;
    }
    return false;
  };
  return (
    <div className="App" style={{ height: "100%" }}>
      <Router>
        {/* Display navbar only if the user is logged in  */}
        {isLoggedIn() ? <NavBar /> : null}

        <Switch>
          <Route
            exact
            path="/login"
            render={() =>
              !isLoggedIn() ? <Landing /> : (window.location.href = "/home")
            }
          />
          <Route
            exact
            path="/home"
            render={() =>
              isLoggedIn() ? <Home /> : (window.location.href = "/login")
            }
          />
          <Route
            exact
            path="/new"
            render={() =>
              isLoggedIn() ? <NewEmployee /> : (window.location.href = "/login")
            }
          />
          <Route
            path="/"
            render={() =>
              isLoggedIn()
                ? (window.location.href = "/home")
                : (window.location.href = "/login")
            }
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
