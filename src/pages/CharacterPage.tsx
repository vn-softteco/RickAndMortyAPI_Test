import { useGetCharacterById } from "@/queries/characters.queries.tsx";
import { DefaultLayout } from "@/layouts/DefaultLayout.tsx";
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
        error
    } = useGetCharacterById(id!);

    return (
        <DefaultLayout>
            {isLoading && <CircularProgress />}
            {isError && <Typography variant="h1">{error.message}</Typography>}
            {character && <CharacterDetails character={character} />}
        </DefaultLayout>
    );
};

export default CharacterPage;
