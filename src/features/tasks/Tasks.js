import { useState } from "react";
import { useSelector } from "react-redux";
import Form from "./Form";
import TasksList from "./TasksList"
import Buttons from "./Buttons"
import Section from "../../common/Section"
import Header from "../../common/Header"
import Footer from "../../common/Footer"
import Container from "../../common/Container"
import { useTasks } from "./useTasks";
import { selectTasks } from "./tasksSlice";

function Tasks() {

  const [hideDone, setHideDone] = useState(false);
  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const { tasks } = useSelector(selectTasks)

  const [
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