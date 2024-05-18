import { PaginatedCharacter } from "@/types";
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Typography
} from "@mui/material";
import { memo } from "react";

interface CharactersListProps {
    data: PaginatedCharacter;
}

const CharactersList = memo(function ({ data }: CharactersListProps) {
    return (
        <Box columnGap={2} rowGap={2} display={"flex"} flexWrap={"wrap"}>
            {data.results.map((character) => (
                <Card
                    key={character.id + character.image}
                    sx={{
                        flex: "22%",
                        height: "40vh"
                    }}
                >
                    <CardHeader
                        titleTypographyProps={{ fontSize: "1rem" }}
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
                </Card>
            ))}
        </Box>
    );
});

export default CharactersList;
