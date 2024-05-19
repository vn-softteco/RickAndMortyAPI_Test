import { Character, PaginatedCharacter } from "@/types";
import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardHeader,
    CardMedia,
    Typography
} from "@mui/material";

interface CharacterProps {
    character: Character;
    disabledClick: boolean;
    handleCharacterClick: () => void;
}

const Character = function ({
    character,
    disabledClick,
    handleCharacterClick
}: CharacterProps) {
    const handleClick = () => {
        handleCharacterClick(character.id);
    };

    return (
        <Box columnGap={2} rowGap={2} display={"flex"} flexWrap={"wrap"}>
            <Card
                sx={{
                    flex: "23%",
                    height: "40vh"
                }}
            >
                <CardActionArea disabled={disabledClick} onClick={handleClick}>
                    <CardHeader
                        titleTypographyProps={{ fontSize: "1em" }}
                        title={character.name}
                    />
                    <CardMedia
                        component="img"
                        height="300"
                        image={character.image}
                        alt={character.name}
                    />
                    <CardContent>
                        <Typography variant="body2">
                            {character.species}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    );
};

export default Character;
