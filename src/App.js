import Form from "../src/features/tasks/Form";
import Tasks from "../src/features/tasks/Tasks"
import Buttons from "../src/features/tasks/Buttons"
import Section from "../src/common/Section"
import Header from "../src/common/Header"
import Footer from "../src/common/Footer"
import Container from "../src/common/Container"
import { useState } from "react";
import { useTasks } from "./features/tasks/useTasks";

function App() {

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
          <Tasks
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

export default App;
