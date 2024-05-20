import { Character } from "@/types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

type CharacterDetailsProps = {
    character: Character;
};

const CharacterDetails = function ({ character }: CharacterDetailsProps) {
    return (
        <Card
            sx={{
                margin: "0 auto",
                display: "flex"
            }}
        >
            <CardMedia
                component="img"
                image={character.image}
                alt={character.name}
                width={300}
                height={300}
            />
            <CardContent
                sx={{
                    display: "flex",
                    flexDirection: "column"
                }}
            >
                <Typography alignSelf="start" gutterBottom variant="h4">
                    {character.name}
                </Typography>
                <Typography alignSelf="start" component="p" variant="h5">
                    {character.species}
                </Typography>
                <Typography alignSelf="start" component="p">
                    {character.gender}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CharacterDetails;
