import "./style.css"

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <ul className="list">
        {tasks.map(task => (
            <li key={task.id}
                className={`list__task ${task.done && hideDone ? " tasks__list--hidden" : ""}`}
            >
                <button
                    onClick={() => toggleTaskDone(task.id)}
                    className="list__taskButton"
                >
                    {task.done ? "✔️" : ""}
                </button>
                <span className={`${task.done ? " list__taskItem--done" : ""}`}>
                    {task.content}
                </span>
                <button
                    onClick={() => removeTask(task.id)}
                    className="list__taskButton list__taskButton--remove"
                >
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;