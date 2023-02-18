import Input from "../../../Input";
import { useQueryParameters, useReplaceQueryParameters } from "../queryParameters";
import searchQueryParamName from "../searchQueryParamName";
import { InputDiv } from "./styled";

const Search = () => {
    const query = useQueryParameters(searchQueryParamName);
    const replaceQueryParameters = useReplaceQueryParameters();

    const onInputChange = ({ target }) => {
        replaceQueryParameters({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined,
        })
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