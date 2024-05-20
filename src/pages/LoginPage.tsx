import { DefaultValues, SubmitHandler, useForm } from "react-hook-form";
import { SignInFormType } from "@/types";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl } from "@/components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSetToken } from "@/queries/token.queries.tsx";
import { useContext } from "react";
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
    const { user } = useContext(AuthContext);
    const { mutateAsync: login, isPending } = useVerifyMockUseMutation();
    const { mutate: setToken } = useSetToken();

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
            .catch((error) => {
                //TODO: Show toast
                console.error("Error", error);
            });
    };

    if (user) return <Navigate to={ROUTES.CHARACTERS} />;

    return (
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
    );
};

export default LoginPage;
