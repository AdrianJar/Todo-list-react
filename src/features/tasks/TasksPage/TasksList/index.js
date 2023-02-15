import { List, Items, ItemContent, Button } from "./styled"
import { useSelector, useDispatch } from "react-redux";
import { toggleTaskDone, removeTask, selectTasksState, selectTasksByQuery } from "../../tasksSlice";
import { Link, useLocation } from "react-router-dom";

const TaskList = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("szukaj");

    const tasks = useSelector(state => selectTasksByQuery(state, query));
    const hideDone = useSelector(selectTasksState);
    const dispatch = useDispatch();

    return (
        <List>
            {tasks.map(task => (
                <Items key={task.id}
                    hidden={task.done && hideDone}>
                    <Button
                        onClick={() => dispatch(toggleTaskDone(task.id))}>
                        {task.done ? "✔️" : ""}
                    </Button>
                    <ItemContent done={task.done} >
                        <Link to={`/zadania/${task.id}`}>{task.content}</Link>
                    </ItemContent>
                    <Button
                        remove
                        onClick={() => dispatch(removeTask(task.id))}>
                        🗑
                    </Button>
                </Items>
            ))}
        </List>
    )
};

export default TaskList;