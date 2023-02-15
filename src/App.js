import { HashRouter, Link, Redirect, Route, Switch } from "react-router-dom";
import AuthorPage from "./features/AuthorPage";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";

function App() {

  return (
    <HashRouter>
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
          <Route path="/zadania/:id">
            <TaskPage />
          </Route>
          <Route path="/zadania">
            <TasksPage />
          </Route>
          <Route path="/author">
            <AuthorPage />
          </Route>
          <Route path="/">
            <Redirect to="/zadania"></Redirect>
          </Route>
        </Switch>
      </nav>
    </HashRouter>
  )
};

export default App