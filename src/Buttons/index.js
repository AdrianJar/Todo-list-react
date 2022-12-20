import { StyledDiv, StyledButton } from "./styled";

const Buttons = ({ hideDone, tasks, toggleHideDone, setAllDone }) => (
    tasks.length > 0 && (
        <StyledDiv>
            <StyledButton
                onClick={toggleHideDone}
            >
                {hideDone ? "Pokaż " : "Ukryj "}ukończone
            </StyledButton>
            <StyledButton
                onClick={setAllDone}
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </StyledButton>
        </StyledDiv>
    )
);

export default Buttons;