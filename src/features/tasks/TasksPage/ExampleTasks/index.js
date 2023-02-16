import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../../../common/Button/styled";
import { fetchExampleTasks, selectLoading } from "../../tasksSlice";

const ExampleTasks = () => {
    const dispatch = useDispatch();
    const Loading = useSelector(selectLoading);

    return (
        <Button onClick={() => dispatch(fetchExampleTasks())} disabled={Loading}>
            {Loading
                ? "Ładowanie..."
                : "Pobierz przykładowe zadania"
                }
        </Button>
    )
}

export default ExampleTasks;