import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useState } from "react";

type SearchProps = {
    names: string[];
    onNameSelect(
        searchText: string | null
    ): (name: string | null) => string | null;
};

const Search = ({ names, onNameSelect }: SearchProps) => {
    const [value, setValue] = useState<string | null>(null);

    const handleInputChange = (event, newInputValue: string) => {
        if (newInputValue.length >= 2 || !newInputValue)
            setSearchValue(newInputValue);
    };

    const setSearchValue = (newValue: string) => {
        setValue(newValue);
        onNameSelect(newValue);
    };

    return (
        <Autocomplete
            sx={{
                mb: 2
            }}
            id="search"
            value={value}
            onInputChange={handleInputChange}
            freeSolo
            options={names}
            renderInput={(params) => (
                <TextField {...params} label="Name search" />
            )}
        />
    );
};

export default Search;
