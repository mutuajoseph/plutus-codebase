import { Link } from "react-router-dom";

function Quiz() {
 return (
  <section>
      <ul>
          <li>
            <Link to={`/quiz`}> Questions Here </Link>
          </li><br/>
      </ul>
  </section>
  );
}

export default Quiz;