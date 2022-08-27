import React from "react";
import { Link, useHistory } from "react-router-dom";


function NavBar({ user, setUser }) {

const history = useHistory();

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
    history.push("/login")
  }

  return (
    <header>
      <div>
        <Link to="/home">Account page</Link>
        <Link to="/goals">Goals page</Link>
        <Link to="/bills">Bills page</Link>
        <Link to="/expenses">Expense page</Link>

      </div>
      <div>
        {user ? (
          <button onClick={handleLogoutClick}>Logout</button>
        ) : (
          <>
            {/* <Link to="/goals">Goals</Link> */}
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </header>
  );
}

export default NavBar;