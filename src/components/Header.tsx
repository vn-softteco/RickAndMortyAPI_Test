import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useDeleteToken } from "@/queries/token.queries.tsx";

const Header = (): JSX.Element => {
    const { mutate: deleteToken } = useDeleteToken();

    const logout = () => {
        deleteToken();
    };

    return (
        <Box
            sx={{
                flexGrow: 1,
                display: "flex"
            }}
        >
            <AppBar>
                <Toolbar
                    sx={{
                        justifyContent: "flex-end"
                    }}
                >
                    <Button color="inherit" onClick={logout}>
                        Log out
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
