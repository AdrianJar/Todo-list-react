export const saveTasksInLocalStorage = tasks =>
    localStorage.setItem("tasks", JSON.stringify(tasks));

export const getTasksInLocalStorage = () =>
    JSON.parse.getItem("tasks") || [];