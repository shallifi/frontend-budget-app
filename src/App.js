import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Goals from "./components/Goals";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import AccountPage from "./components/AccountPage";

function App() {
  const [user, setUser] = useState(null)
  // const [count, setCount] = useState(0);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar user={user} setUser={setUser} />
        <Switch>
          <Route path="/home">
              <AccountPage />
            <h1>Home Page</h1>
          </Route>

          <Route path="/login">
              <Login user={user} setUser={setUser}/>
            <h1>login page </h1>
          </Route>

          <Route path="/goals">
              <Goals />
            <h1> Goals (from the App components) </h1>
          </Route>

          <Route path="/">
            <h1>Not on any page  </h1>
          </Route>
        </Switch>

        
      </div>
    </BrowserRouter>
  );
}

export default App;
