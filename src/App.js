import Landing from "./pages/Landing";
import Home from "./pages/Home";
import NewEmployee from "./pages/NewEmployee";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
// to get user data from the sotred cookie on the browser
import Cookies from "js-cookie";
function App() {
  const isLoggedIn = () => {
    if (Cookies.get("username") !== undefined) {
      return true;
    }
    return false;
  };
  const isAdmin = () => {
    // return true if the current user is admin
    return Cookies.get("username") === "admin";
  };
  return (
    <div className="App">
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
            render={() => {
              if (isLoggedIn()) {
                if (isAdmin()) {
                  //render this page only if the user logged in and admin
                  return <NewEmployee />;
                } else {
                  return <Redirect to="/home" />;
                }
              } else {
                window.location.href = "/login";
              }
            }}
          />
          <Route
            path="/"
            render={() => {
              isLoggedIn() ? <Home /> : (window.location.href = "/login");
            }}
          />
        </Switch>
        {isLoggedIn() ? <Footer /> : null}
      </Router>
    </div>
  );
}

export default App;
