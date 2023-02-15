import { List, Items, ItemContent, Button } from "./styled"
import { useSelector, useDispatch } from "react-redux";
import { toggleTaskDone, removeTask, selectTasksState } from "../../tasksSlice";
import { Link } from "react-router-dom";

const TaskList = () => {

    const { tasks, hideDone } = useSelector(selectTasksState)
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