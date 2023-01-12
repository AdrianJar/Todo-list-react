import { useSelector } from "react-redux";
import Form from "./Form";
import TasksList from "./TasksList"
import Buttons from "./Buttons"
import Section from "../../common/Section"
import Header from "../../common/Header"
import Footer from "../../common/Footer"
import Container from "../../common/Container"
import { selectTasks } from "./tasksSlice";

function Tasks() {

  const { tasks } = useSelector(selectTasks)

  return (
    <Container>
      <Header
        title="Lista zadań"
      />
      <Section
        title="Dodaj nowe zadanie"
        body={
          <Form />
        }
      />
      <Section
        title="Lista zadań"
        extraHeaderContent={
          <Buttons
            tasks={tasks}
          />
        }
        body={
          <TasksList
            tasks={tasks}
          />
        }
      />
      <Footer
        title="Made by: Adrian Jaroszuk 2022"
      />
    </Container>
  );
}

export default Tasks;