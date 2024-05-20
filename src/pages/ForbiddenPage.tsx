import { DefaultLayout } from "@/layouts/DefaultLayout.tsx";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/types/constants.ts";

const ForbiddenPage = function () {
    const navigate = useNavigate();

    return (
        <DefaultLayout>
            <>
                <Typography variant="h1">Access forbidden</Typography>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => navigate(ROUTES.CHARACTERS)}
                >
                    Go to Characters
                </Button>
            </>
        </DefaultLayout>
    );
};

export default ForbiddenPage;
