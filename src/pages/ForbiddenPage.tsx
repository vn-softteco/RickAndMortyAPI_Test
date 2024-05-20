import { DefaultLayout } from "@/layouts/DefaultLayout.tsx";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/types/constants.ts";

const ForbiddenPage = function () {
    const navigate = useNavigate();

    return (
        <DefaultLayout>
            <Box>
                <Typography variant="h1">Access forbidden</Typography>
                <Box>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => navigate(ROUTES.CHARACTERS)}
                    >
                        Go to Characters
                    </Button>
                </Box>
            </Box>
        </DefaultLayout>
    );
};

export default ForbiddenPage;
