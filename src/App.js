import { HashRouter, Redirect, Route, Switch } from "react-router-dom"
import Navigation from "./Navigation"
import AuthorPage from "./features/AuthorPage"
import TaskPage from "./features/tasks/TaskPage"
import TasksPage from "./features/tasks/TasksPage"
import { toAuthor, toTask, toTasks } from "./routes"




function App() {

  return (
    <HashRouter>
    <nav>
      <Navigation />
      <Switch>
        <Route path={toTask()}>
          <TaskPage />
        </Route>
        <Route path={toTasks()}>
          <TasksPage />
        </Route>
        <Route path={toAuthor()}>
          <AuthorPage />
        </Route>
        <Route path="/">
          <Redirect to={toTasks()}></Redirect>
        </Route>
      </Switch>
    </nav>
  </HashRouter>
  )
};

export default App