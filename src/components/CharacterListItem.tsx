import { Character } from "@/types";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import CardActionArea from "@mui/material/CardActionArea";

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
        <Grid item xs={12} sm={6} md={4} lg={3}>
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
        </Grid>
    );
};

export default CharacterListItem;
