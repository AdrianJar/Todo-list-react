import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Author from "./features/author/Author";
import Tasks from "./features/tasks/Tasks";

function App() {

  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/zadania">Zadania</Link>
          </li>
          <li>
            <Link to="/author">O autorze</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/zadania">
            <Tasks />
          </Route>
          <Route path="/author">
            <Author />
          </Route>
        </Switch>
      </nav>
    </BrowserRouter>
  )
};

export default App