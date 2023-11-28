import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import './App.css';
import Login from './components/LogIn';
import SignUp from './components/SignUp';
import Profile from './components/Profile';

function App() {
  const [seen, setSeen] = useState(false)

    function togglePop () {
        setSeen(!seen);
    };

  return (
    <Router>
    <div className="row">
      <h2>Welcome!</h2>
      <div className="col">
        <img
        style={{"height":"500px"}}
        src="https://toppng.com/uploads/preview/survey-icon-cards-para-rede-social-11563482395wjayodhhsw.png"
        alt="Oh no!"
        />
      </div>
      <div className="col">
        <Login />
        <br/>
        <div>
            <button onClick={togglePop}> Don't have an account yet? Sign Up </button>
            {seen ? <SignUp toggle={togglePop} /> : null}
        </div>
        <main>
          <Routes>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </div>
  </Router>
  );
}

export default App;
