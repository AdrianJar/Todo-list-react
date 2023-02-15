import { HashRouter, Redirect, Route, Switch } from "react-router-dom"
import NavList from "./common/NavList"
import AuthorPage from "./features/AuthorPage"
import TaskPage from "./features/tasks/TaskPage"
import TasksPage from "./features/tasks/TasksPage"




function App() {

  return (
    <HashRouter>
    <nav>
      <NavList />
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