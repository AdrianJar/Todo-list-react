export const getExampleTasks = async () => {
    const response = await fetch("/todo_list_react_v2/exampleTasks.json");

    if (!response.ok) {
        new Error(response.statusText);
    }

    return await response.json();
};