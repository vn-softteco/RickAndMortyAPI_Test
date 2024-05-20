import { ReactNode } from "react";
import Header from "@/components/Header.tsx";
import Box from "@mui/material/Box";

export const DefaultLayout = (props: {
    children: ReactNode;
}) => (
    <>
        <Header />
        <Box sx={{ mt: "5em" }}>{props.children}</Box>
    </>
);
