import Form from "./Form";
import TasksList from "./TasksList"
import Buttons from "./Buttons"
import Section from "../../../common/Section"
import Header from "../../../common/Header"
import Footer from "../../../common/Footer"
import Container from "../../../common/Container"
import Search from "./Search";
import ExampleTasks from "./ExampleTasks";

function TasksPage() {

  return (
    <Container>
      <Header
        title="Lista zadań"
      />
      <Section
        title="Dodaj nowe zadanie"
        extraHeaderContent={<ExampleTasks />}
        body={<Form />}
      />
      <Section
        title="Wyszukiwarka"
        body={<Search />}
      />
      <Section
        title="Lista zadań"
        extraHeaderContent={<Buttons />}
        body={<TasksList />}
      />
      <Footer
        title="Made by: Adrian Jaroszuk 2022"
      />
    </Container>
  );
}

export default TasksPage;