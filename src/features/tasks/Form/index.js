import { nanoid } from "@reduxjs/toolkit";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../tasksSlice";
import { FormDiv, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {

    const [newTaskContent, setNewTaskContent] = useState("");

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();

        const trimedNewTask = newTaskContent.trim()

        if (trimedNewTask() !== "")
            dispatch(addTask({
                content: trimedNewTask,
                done: false,
                id: nanoid(),
            }))


        addNewTask();
        setNewTaskContent("");
    };

    const inputRef = useRef(null);
    const focusInput = () => {
        inputRef.current.focus()
    }

    return (
        <FormDiv
            onSubmit={onFormSubmit}
        >
            <Input
                value={newTaskContent}
                type="text"
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
                ref={inputRef}
                required
            />
            <Button
                onClick={focusInput}
            >
                Dodaj zadanie
            </Button>
        </FormDiv>
    )
};

export default Form;

