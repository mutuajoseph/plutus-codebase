import { useState } from 'react';

function SignUp(props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  function handleLogin(e) {
      e.preventDefault()
      // Code to handle login goes here
      props.toggle()
  }

  return (
      <div className="popup">
          <div className="popup-inner">
              <h2>Sign Up</h2>
              <form onSubmit={handleLogin}>
                  <label>
                      E-mail:
                      <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                  </label>
                  <label>
                      Username:
                      <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                  </label>
                  <label>
                      Password:
                      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                  </label>
                  <button type="submit">Sign Up</button>
              </form>
              <button onClick={props.toggle}>Close</button>
          </div>
      </div>
  )
   }
   
   export default SignUp;