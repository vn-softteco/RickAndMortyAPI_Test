import { DefaultValues, SubmitHandler, useForm } from "react-hook-form";
import { SignInFormType } from "@/types";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import { FormControl } from "@/components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSetToken } from "@/queries/token.queries.tsx";
import { useContext, useState } from "react";
import { AuthContext } from "@/components/AuthProvider.tsx";
import { ROUTES } from "@/types/constants.ts";
import { Navigate } from "react-router-dom";
import { useVerifyMockUseMutation } from "@/queries/auth.queries.tsx";

const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().required("Password is required")
});

const defaultValues: DefaultValues<SignInFormType> = {
    email: "",
    password: ""
};

const LoginPage = function () {
    const [errorToastOpen, setErrorToastOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const { user } = useContext(AuthContext);
    const { mutateAsync: login, isPending } = useVerifyMockUseMutation();
    const { mutate: setToken } = useSetToken();

    const handleErrorToastClose = () => {
        setErrorToastOpen(false);
    };

    const { handleSubmit, control } = useForm<SignInFormType>({
        defaultValues,
        resolver: yupResolver(schema)
    });
    const onSubmit: SubmitHandler<SignInFormType> = (data) => {
        login(data)
            .then((response) => {
                setToken(response.token);
                // TODO: Think about auto navigation after token setting
                return <Navigate to={ROUTES.CHARACTERS}></Navigate>;
            })
            .catch((error: string) => {
                //TODO: Show toast
                setErrorMessage(error);
                setErrorToastOpen(true);
            });
    };

    if (user) return <Navigate to={ROUTES.CHARACTERS} />;

    return (
        <Box>
            <Snackbar
                open={errorToastOpen}
                autoHideDuration={5000}
                onClose={handleErrorToastClose}
            >
                <Alert
                    onClose={handleErrorToastClose}
                    severity="error"
                    sx={{ width: "100%" }}
                >
                    {errorMessage}
                </Alert>
            </Snackbar>
            <form
                style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column"
                }}
                onSubmit={handleSubmit(onSubmit)}
            >
                <FormControl
                    name="email"
                    label="Email"
                    control={control}
                    type="email"
                    component={TextField}
                    style={{ marginBottom: "1em" }}
                />
                <FormControl
                    name="password"
                    label="Password"
                    type="password"
                    control={control}
                    component={TextField}
                    style={{ marginBottom: "1em" }}
                />
                <Button variant="contained" type="submit" disabled={isPending}>
                    Sign in
                </Button>
            </form>
        </Box>
    );
};

export default LoginPage;
