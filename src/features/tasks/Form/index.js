import { useState, useRef } from "react";
import { FormDiv, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {

    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent.trim() !== "") {
            addNewTask(newTaskContent.trim());
            setNewTaskContent("");
        }
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

