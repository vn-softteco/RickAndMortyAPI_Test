import {
    Box,
    CircularProgress,
    Grid,
    Pagination,
    Typography
} from "@mui/material";
import CharactersList from "@/components/CharacterList.tsx";
import { useCallback, useState } from "react";
import { useGetCharacters } from "@/queries/characters.queries.tsx";
import { Search } from "@/components";
import { DefaultLayout } from "@/layouts/DefaultLayout.tsx";

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
        <DefaultLayout>
            <Grid>
                <Box>
                    <Search
                        names={names}
                        onNameSelect={handleNameSelect}
                    ></Search>
                </Box>
                {(() => {
                    if (isLoading) {
                        return <CircularProgress />;
                    }

                    if (isError) {
                        return (
                            <Typography variant="h1">
                                {error.message}
                            </Typography>
                        );
                    }

                    if (isFetched && isSuccess && data) {
                        return (
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
                        );
                    }
                    return (
                        <Box>
                            <Typography variant="h1">Error</Typography>
                        </Box>
                    );
                })()}
            </Grid>
        </DefaultLayout>
    );
};

export default CharactersPage;
