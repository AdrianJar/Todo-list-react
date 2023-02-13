import { List, Items, ItemContent, Button } from "./styled"
import { useSelector, useDispatch } from "react-redux";
import { toggleTaskDone, removeTask, selectTasksState } from "../tasksSlice";

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
                        {task.content}
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