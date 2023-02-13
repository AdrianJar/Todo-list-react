import { StyledDiv, StyledButton } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
    selectTasksState,
    setAllDone,
    toggleHideDone,
    fetchExampleTasks
} from "../tasksSlice";

const Buttons = () => {
    const { tasks, hideDone } = useSelector(selectTasksState);
    const dispatch = useDispatch();
    const areTasksEmpty = tasks.length > 0

    return (

        <StyledDiv>
            <StyledButton onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
            </StyledButton>
            {areTasksEmpty && (
                <>
                    <StyledButton
                        onClick={() => dispatch(toggleHideDone())}
                    >
                        {hideDone ? "Pokaż " : "Ukryj "}ukończone
                    </StyledButton>
                    <StyledButton
                        onClick={() => dispatch(setAllDone())}
                        disabled={tasks.every(({ done }) => done)}
                    >
                        Ukończ wszystkie
                    </StyledButton>
                </>
            )}
        </StyledDiv>
    )

};

export default Buttons;