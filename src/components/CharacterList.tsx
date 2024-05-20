import { PaginatedCharacter } from "@/types";
import Grid from "@mui/material/Grid";
import { useContext } from "react";
import { AuthContext } from "@/components/AuthProvider";
import { Character } from "@/components";
import { generatePath, useNavigate } from "react-router-dom";
import { ROUTES } from "@/types/constants";

interface CharactersListProps {
    data: PaginatedCharacter;
}

const CharactersList = function ({ data }: CharactersListProps) {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleCharacterClick = (id: number) => {
        navigate(generatePath(ROUTES.CHARACTER_BY_ID, { id }));
    };

    return (
        <Grid
            container
            rowGap={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            display="flex"
            flexWrap="wrap"
            justifyContent="space-between"
            alignItems="center"
        >
            {data.results.map((character) => (
                <Character
                    key={character.id}
                    character={character}
                    disabledClick={user?.role !== "admin"}
                    handleCharacterClick={handleCharacterClick}
                ></Character>
            ))}
        </Grid>
    );
};

export default CharactersList;
