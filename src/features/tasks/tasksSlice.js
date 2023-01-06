import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [
            {
                content: "zadanie 123",
                done:true,
            },
            {
                content: "zadanie testowe 2",
                done:true,
            }
        ],
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },
    },
});

export const { addTask } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;

