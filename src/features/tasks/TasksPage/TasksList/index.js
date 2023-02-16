import { List, Items, ItemContent, Button, StyledLink } from "./styled"
import { useSelector, useDispatch } from "react-redux";
import { toggleTaskDone, removeTask, selectTasksState, selectTasksByQuery } from "../../tasksSlice";
import { useLocation } from "react-router-dom";
import searchQueryParamName from "../searchQueryParamName";

const TaskList = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get(searchQueryParamName);

    const tasks = useSelector(state => selectTasksByQuery(state, query));
    const { hideDone } = useSelector(selectTasksState);
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
                        <StyledLink to={`/zadania/${task.id}`}>{task.content}</StyledLink>
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