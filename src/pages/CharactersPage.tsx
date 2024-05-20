import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import CharactersList from "@/components/CharacterList.tsx";
import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { useGetCharacters } from "@/queries/characters.queries.tsx";
import { Search } from "@/components";
import { DefaultLayout } from "@/layouts/DefaultLayout.tsx";

const CharactersPage = function () {
    const [selectedName, setSelectedName] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const { data, isLoading, isError, error } = useGetCharacters(
        selectedName,
        currentPage
    );

    const handleNameSelect = useCallback((name: string) => {
        setSelectedName(name);
        setCurrentPage(1);
    }, []);

    const handlePageChange = (_: ChangeEvent<unknown>, page: number): void => {
        setCurrentPage(page);
    };

    const names = useMemo<string[]>(
        () => (data ? [...new Set(data.results.map((p) => p.name))] : []),
        [data]
    );

    return (
        <DefaultLayout>
            <>
                <Search names={names} onNameSelect={handleNameSelect}></Search>
            </>

            {isLoading && <CircularProgress />}
            {isError && <Typography variant="h1">{error.message}</Typography>}
            {data && (
                <>
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
                </>
            )}
        </DefaultLayout>
    );
};

export default CharactersPage;
