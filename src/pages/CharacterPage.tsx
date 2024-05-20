import { useGetCharacterById } from "@/queries/characters.queries.tsx";
import { DefaultLayout } from "@/layouts/DefaultLayout.tsx";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import CharacterDetails from "../components/CharacterDetails.tsx";

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
            {(() => {
                if (isLoading) {
                    return <CircularProgress />;
                }

                if (isError) {
                    return (
                        <Typography variant="h1">{error.message}</Typography>
                    );
                }

                if (isFetched && isSuccess && character) {
                    return (
                        <Box>
                            <CharacterDetails
                                character={character}
                            ></CharacterDetails>
                        </Box>
                    );
                }

                return (
                    <Box>
                        <Typography variant="h1">Error</Typography>
                    </Box>
                );
            })()}
        </DefaultLayout>
    );
};

export default CharacterPage;
