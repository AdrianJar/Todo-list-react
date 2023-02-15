import { useSelector, useDispatch } from "react-redux";
import { Button, StyledDiv } from "../../../../common/Button/styled";
import {
    selectTasksState,
    setAllDone,
    toggleHideDone,
} from "../../tasksSlice";

const Buttons = () => {
    const { tasks, hideDone } = useSelector(selectTasksState);
    const dispatch = useDispatch();
    const areTasksEmpty = tasks.length > 0

    return (

        <StyledDiv>
            {areTasksEmpty && (
                <>
                    <Button
                        onClick={() => dispatch(toggleHideDone())}
                    >
                        {hideDone ? "Pokaż " : "Ukryj "}ukończone
                    </Button>
                    <Button
                        onClick={() => dispatch(setAllDone())}
                        disabled={tasks.every(({ done }) => done)}
                    >
                        Ukończ wszystkie
                    </Button>
                </>
            )}
        </StyledDiv>
    )

};

export default Buttons;