import React, {useState} from 'react'

function Auth() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
   
    const [errors, setErrors] = useState([])

    function onSubmit(e){
        e.preventDefault()
        const user = {
            name: username,
            email,
            password,
            password_confirmation: passwordConfirmation
        }
       
        fetch(`/users`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(json => {
            if(json.errors) setErrors(Object.entries(json.errors))
            else alert("Thanks for logging in, please refresh the page to check out the sessions magic :)")
        })
    }
    return (
      <> 
      <form onSubmit={onSubmit}>
        <fieldset>
        <legend>Sign UP</legend>
            <label htmlFor="username1">
                Username
            </label>
                <input type="text" id="username1" value={username} onChange={(e) => setUsername(e.target.value)} />
            <label htmlFor="email1">
            Email
            </label>
            <input type="text" id="email1" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="password1">
            Password
            </label>
            <input type="password" id="password1"value={password} onChange={(e) => setPassword(e.target.value)} />
            
            <label htmlFor="password2">
            Confirm Password
            </label>
            <input type="password" id="password2"value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
            
            <input type="submit" value="Sign up!" />
        </fieldset>
    </form>
    {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}
      </>
    )
}

export default Auth;
