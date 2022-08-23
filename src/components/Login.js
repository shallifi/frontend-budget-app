import React, {useState} from 'react'
import Auth from './Auth'
import { useHistory } from "react-router-dom";


function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
   
    const [error, setError] = useState([])
    const history = useHistory();
    
    function handleSubmit(e){
      e.preventDefault()
      const user = {
          username,
          password
      }
     
      fetch(`/login`,{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(user)
      })
      .then(res => {
        if(res.ok){
          res.json()
          .then(user=>{
            setUsername(user)
                        
          })
          history.push('/home')}  
        else {
          res.json()
          .then(json => setError(json.error))
        }
        
      })
      
  }

    return (
      
      <div className='login'> 
        <h1>Treasure Room App Login</h1>
        <form onSubmit={handleSubmit}>
        <fieldset>
          <h1>Login</h1>
        <label htmlFor="username">
          Username
        </label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label htmlFor="password">
         Password
        </label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
       
        <input type="submit" value="Login!" />
      </fieldset>
      </form>
      {error?<div>{error}</div>:null}
      <Auth />
        </div>
    )
}

export default Login;