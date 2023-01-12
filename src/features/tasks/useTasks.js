import { useEffect, useState } from "react";

export const useTasks = () => {
    const [tasks, setTasks] = useState(
        localStorage.getItem("tasks")
            ? JSON.parse(localStorage.getItem("tasks"))
            : []
    );

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);
    


    return [];
};