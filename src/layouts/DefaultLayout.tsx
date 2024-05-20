import Header from "@/components/Header.tsx";
import { Box } from "@mui/material";

export const DefaultLayout = (props: {
    children: JSX.Element | null;
}): JSX.Element => (
    <>
        <Header />
        <Box sx={{ mt: "5em" }}>{props.children}</Box>
    </>
);
