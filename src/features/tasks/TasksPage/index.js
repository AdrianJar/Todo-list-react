import Form from "./Form";
import TasksList from "./TasksList"
import Buttons from "./Buttons"
import Section from "../../../common/Section"
import Header from "../../../common/Header"
import Footer from "../../../common/Footer"
import Container from "../../../common/Container"
import { useLocation } from "react-router-dom";

function TasksPage() {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  searchParams.get("szukaj");

  return (
    <Container>
      {location.search}
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
          <Buttons />
        }
        body={
          <TasksList />
        }
      />
      <Footer
        title="Made by: Adrian Jaroszuk 2022"
      />
    </Container>
  );
}

export default TasksPage;