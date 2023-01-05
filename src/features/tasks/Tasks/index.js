import { List, Items, ItemContent, Button } from "./styled"

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <List>
        {tasks.map(task => (
            <Items key={task.id}
                hidden={task.done && hideDone}
            >
                <Button
                    onClick={() => toggleTaskDone(task.id)}
                >
                    {task.done ? "✔️" : ""}
                </Button>
                <ItemContent done={task.done} >
                    {task.content}
                </ItemContent>

                <Button
                    remove
                    onClick={() => removeTask(task.id)}
                >
                    🗑
                </Button>
            </Items>
        ))}
    </List>
);

export default Tasks;