import { DefaultLayout } from "@/layouts/DefaultLayout.tsx";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/types/constants.ts";

const ForbiddenPage = function () {
    const navigate = useNavigate();

    return (
        <DefaultLayout>
            <Box>
                <Typography variant="h1">Access forbidden</Typography>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => navigate(ROUTES.CHARACTERS)}
                >
                    Go to Characters
                </Button>
            </Box>
        </DefaultLayout>
    );
};

export default ForbiddenPage;
