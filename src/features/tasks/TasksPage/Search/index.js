import { useHistory, useLocation } from "react-router-dom";
import Input from "../../../Input";
import searchQueryParamName from "../searchQueryParamName";
import { InputDiv } from "./styled";

const Search = () => {
    const location = useLocation();
    const history = useHistory();
    const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

    const onInputChange = ({ target }) => {
        const searchParams = (new URLSearchParams(location.search))

        if (target.value.trim() === "") {
            searchParams.delete(searchQueryParamName);
        } else {
            searchParams.set(searchQueryParamName, target.value);
        }

        history.push(`${location.pathname}?${searchParams.toString()}`);
    };

    return (
        <InputDiv>
            <Input
                placeholder="Filtruj zadania:"
                value={query || ""}
                onChange={onInputChange}
            />
        </InputDiv>
    );
}

export default Search;