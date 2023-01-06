import Form from "./Form";
import TasksList from "./TasksList"
import Buttons from "./Buttons"
import Section from "../../common/Section"
import Header from "../../common/Header"
import Footer from "../../common/Footer"
import Container from "../../common/Container"
import { useState } from "react";
import { useTasks } from "./useTasks";

function Tasks() {

  const [hideDone, setHideDone] = useState(false);
  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const [
    tasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
  ] = useTasks();


  return (
    <Container>
      <Header
        title="Lista zadań"
      />
      <Section
        title="Dodaj nowe zadanie"
        body={
          <Form
            addNewTask={addNewTask}
          />
        }
      />
      <Section
        title="Lista zadań"
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
        body={
          <TasksList
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
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