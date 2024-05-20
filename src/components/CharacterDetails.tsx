import { Character } from "@/types";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

type CharacterDetailsProps = {
    character: Character;
};

const CharacterDetails = function ({ character }: CharacterDetailsProps) {
    return (
        <Box display="flex">
            <Card
                sx={{
                    margin: "0 auto"
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
        </Box>
    );
};

export default CharacterDetails;
