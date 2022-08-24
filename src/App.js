import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Goals from "./components/Goals";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import AccountPage from "./components/AccountPage";
import GoalCard from "./components/GoalCard";

function App() {
  const [user, setUser] = useState(null)
  const [goals, setGoals] = useState([]);
 

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch('/goals')
      .then((res) => res.json())
      .then((data) => setGoals(data));
  }, [setGoals]);
  if (!user) return <Login onLogin={setUser} />;

  console.log("in app",goals)

  const onDeleteGoals = (deletedGoal) => {
    const updatedGoals = goals.filter(
      (goal) => goal.id !== deletedGoal.id
    );
    setGoals(updatedGoals);
  };


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
              <Goals goals={goals} setGoals={setGoals} onDeleteGoals={onDeleteGoals}/>
            <h1> Goals (from the App components) </h1>
          </Route>
          {/* <Route path="/goals/card">
              <GoalCard goals={goals} setGoals={setGoals} onDeleteGoals={onDeleteGoals}/>
            <h1> Goals (from the App components) </h1>
          </Route> */}

          <Route path="/">
            <h1>Not on any page  </h1>
          </Route>
        </Switch>

        
      </div>
    </BrowserRouter>
  );
}

export default App;
