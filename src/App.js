import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Goals from "./components/Goals";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import AccountPage from "./components/AccountPage";
import Bills from "./components/Bills";
// import { Table } from "react-bootstrap";
import Table from "./components/Table";
import Expenses from "./components/Expenses";



function App() {
  const [user, setUser] = useState(null)
  const [goals, setGoals] = useState([]);
  // const [bills, setBills] = useState([]);
  const [dataTable, setDataTable] = useState([])
 

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


  // useEffect for table
  useEffect(() => {
    fetch('/bills')
      .then((res) => res.json())
      .then((data) => setDataTable(data));
  }, [setDataTable]);
 
  if (!user) return <Login onLogin={setUser} />;

  const column = [
    { heading: 'Company Name', value: 'company_name'},
    { heading: 'Min Payment', value: 'min_payment'},
    { heading: 'Payoff Amount', value: 'payoff_amount'},
    { heading: 'Payment', value: 'payment'},
  ]

// this console log worked showing dataTable
  // console.log("in app",dataTable)

  // filter similar to onDelete goals by the id update 
  // set goals with filter arrray spread that in and add in the one that comes back from fetch all this happens inside of dot then that happens inside return from patch

  // use the dot sort function

  // const onDeleteGoals = (deletedGoal) => {
  //   const updatedGoals = goals.filter(
  //     (goal) => goal.id !== deletedGoal.id
  //   );
  //   setGoals(updatedGoals);
  // };


  return (
    
      <div className="App">
        <Navbar user={user} setUser={setUser} />
        <Switch>
          <Route path="/home">
              <AccountPage dataTable={dataTable} goals={goals}/>
            
          </Route>

          <Route path="/bills">
              <Bills />
              <Table  dataTable={dataTable} setDataTable={setDataTable} column={column} />
              {/* put this on line above if using bills={bills} setBills={setBills} */}
            <h1>Bill page info on app component</h1>
            
          </Route>

          <Route path="/login">
              <Login user={user} setUser={setUser}/>
            <h1>login page </h1>
          </Route>

          <Route path="/goals">
              <Goals goals={goals} setGoals={setGoals} />
            <h1> Goals (from the App components) </h1>
          </Route>

          <Route path="/expenses">
              <Expenses user={user} />
            <h1> Expenses (from the App component) </h1>
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
    
  );
}

export default App;
