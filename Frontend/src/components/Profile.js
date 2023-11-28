import { Link } from "react-router-dom";
import NavBar from "./NavBar"

function Profile() {
 return (
  <section>
    <NavBar />
      <ul>
          <li>
            <Link to={`/quiz`}> Questions Here </Link>
          </li><br/>
      </ul>
  </section>
  );
}

export default Profile;