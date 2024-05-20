import { Character } from "@/types";
import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardHeader,
    CardMedia,
    Typography
} from "@mui/material";

type CharacterProps = {
    character: Character;
    disabledClick: boolean;
    handleCharacterClick: (id: number) => void;
};

const CharacterListItem = function ({
    character,
    disabledClick,
    handleCharacterClick
}: CharacterProps) {
    const handleClick = () => {
        handleCharacterClick(character.id);
    };

    return (
        <Box
            columnGap={2}
            rowGap={2}
            display="flex"
            flexWrap="wrap"
            minWidth="300px"
        >
            <Card
                sx={{
                    height: "40vh",
                    width: "100%"
                }}
            >
                <CardActionArea disabled={disabledClick} onClick={handleClick}>
                    <CardHeader
                        titleTypographyProps={{
                            fontSize: "1em",
                            fontWeight: "bold"
                        }}
                        title={character.name}
                    />
                    <CardMedia
                        component="img"
                        height="300"
                        image={character.image}
                        alt={character.name}
                    />
                    <CardContent>
                        <Typography component="p">
                            {character.species}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    );
};

export default CharacterListItem;
