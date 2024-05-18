import { useGetCharacters } from "@/services/characters.service.ts";
import {
    Box,
    CircularProgress,
    Grid,
    Pagination,
    Typography
} from "@mui/material";
import CharactersList from "@/components/CharacterList.tsx";
import Search from "../components/Search.tsx";
import { useCallback, useState } from "react";

const CharactersPage = function () {
    const [selectedName, setSelectedName] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const { data, isLoading, isError, error, isFetched, isSuccess } =
        useGetCharacters(selectedName, currentPage);

    const handleNameSelect = useCallback(
        (name) => {
            setSelectedName(name);
            setCurrentPage(1);
        },
        [selectedName, currentPage]
    );

    const handlePageChange = (event, page) => {
        setCurrentPage(page);
    };

    const names = !!data ? [...new Set(data.results.map((p) => p.name))] : [];

    return (
        <>
            <Grid>
                <Box>
                    <Search
                        names={names}
                        onNameSelect={handleNameSelect}
                    ></Search>
                </Box>
                {isLoading ? (
                    <CircularProgress />
                ) : isError ? (
                    <Typography variant="h1">{error.message}</Typography>
                ) : isFetched && isSuccess && data ? (
                    <Box>
                        <CharactersList data={data} />
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                m: 2
                            }}
                        >
                            <Pagination
                                color="primary"
                                count={data.info.pages}
                                page={currentPage}
                                onChange={handlePageChange}
                            />
                        </Box>
                    </Box>
                ) : null}
            </Grid>
        </>
    );
};

export default CharactersPage;
