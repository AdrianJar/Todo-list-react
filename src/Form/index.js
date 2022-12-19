import { useState, useRef } from "react";
import "./style.css";

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
        <form className="form" onSubmit={onFormSubmit}>
            <input
                value={newTaskContent}
                type="text"
                placeholder="Co jest do zrobienia?"
                className="form__input"
                onChange={({ target }) => setNewTaskContent(target.value)}
                ref={inputRef}
                required
            />
            <button
                onClick={focusInput}
                className="form__button">Dodaj zadanie</button>
        </form>
    )
};

export default Form;

