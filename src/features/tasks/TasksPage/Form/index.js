import { nanoid } from "@reduxjs/toolkit";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import Input from "../../../Input";
import { addTask } from "../../tasksSlice";
import { FormDiv, Button } from "./styled";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();

        const trimedNewTaskContent = newTaskContent.trim()

        if (!trimedNewTaskContent) {
            return;
        }
        dispatch(addTask({
            content: trimedNewTaskContent,
            done: false,
            id: nanoid(),
        }))

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

