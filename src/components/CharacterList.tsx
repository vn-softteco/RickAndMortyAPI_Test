import { PaginatedCharacter } from "@/types";
import { Box } from "@mui/material";
import { memo, useCallback, useContext } from "react";
import { AuthContext } from "@/components/AuthProvider.tsx";
import { Character } from "@/components";
import { generatePath, useNavigate } from "react-router-dom";
import { ROUTES } from "@/types/constants.ts";

interface CharactersListProps {
    data: PaginatedCharacter;
}

const CharactersList = memo(function ({ data }: CharactersListProps) {
    const { isAdmin } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleCharacterClick = (id: string) => {
        console.log(id);
        navigate(generatePath(ROUTES.CHARACTER_BY_ID, { id }));
    };

    return (
        <Box columnGap={2} rowGap={2} display={"flex"} flexWrap={"wrap"}>
            {data.results.map((character) => (
                <Character
                    key={character.id + character.image}
                    character={character}
                    disabledClick={!isAdmin}
                    handleCharacterClick={handleCharacterClick}
                ></Character>
            ))}
        </Box>
    );
});

export default CharactersList;
