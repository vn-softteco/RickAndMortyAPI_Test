import { useGetCharacterById } from "@/queries/characters.queries.tsx";
import { DefaultLayout } from "@/layouts/DefaultLayout.tsx";
import Character from "@/components/Character.tsx";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "@/components/AuthProvider.tsx";

const CharacterPage = function () {
    const { id } = useParams();
    const {
        data: character,
        isLoading,
        isError,
        error,
        isFetched,
        isSuccess
    } = useGetCharacterById(id!);

    return (
        <DefaultLayout>
            {isLoading ? (
                <CircularProgress />
            ) : isError ? (
                <Typography variant="h1">{error.message}</Typography>
            ) : isFetched && isSuccess && character ? (
                <Box>
                    <Character
                        disabledClick={false}
                        character={character}
                        handleCharacterClick={() => {}}
                    ></Character>
                </Box>
            ) : null}
        </DefaultLayout>
    );
};

export default CharacterPage;
