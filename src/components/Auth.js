import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

function Auth() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
   
    const [errors, setErrors] = useState([])
    const history = useHistory()

  
 function handleSubmit(e){
            e.preventDefault()
            const user = {
                username,
                email,
                password,
                password_confirmation: passwordConfirmation
            }
           
            fetch('/users',{
              method:'POST',
              headers:{'Content-Type': 'application/json'},
              body:JSON.stringify(user)
            })
            .then(res => res.json())
            .then(json => {
                if(json.errors) setErrors(Object.entries(json.errors))
                else alert("Success")
                history.push('/goals')
            })
        }
        // .then(res => res.json())
        // .then(json => {
        //     if(json.errors) setErrors(Object.entries(json.errors))
        //     else alert("Thank you for signing up")
        //     history.push("/home")
            
        
    
    return (
      <> 
      <form onSubmit={handleSubmit}>
        <fieldset>
        <legend>Sign UP</legend>
            <label htmlFor="username">
                Username
            </label>
                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <label htmlFor="email1">
            Email
            </label>
            <input type="text" id="email1" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="password">
            Password
            </label>
            <input type="password" id="password"value={password} onChange={(e) => setPassword(e.target.value)} />
            
            <label htmlFor="password">
            Confirm Password
            </label>
            <input type="password" id="password"value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
            
            <input type="submit" value="Sign up!" />
        </fieldset>
    </form>
    {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}
      </>
    )
}

export default Auth;
