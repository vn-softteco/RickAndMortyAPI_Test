import { DefaultValues, SubmitHandler, useForm } from "react-hook-form";
import { SignInFormType } from "@/types";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl } from "@/components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLogin } from "@/queries/auth.queries.tsx";

const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().required("Password is required")
});

const defaultValues: DefaultValues<SignInFormType> = {
    email: "",
    password: ""
};

const LoginPage = function () {
    const { mutate: login, isPending } = useLogin();
    const { handleSubmit, control } = useForm<SignInFormType>({
        defaultValues,
        resolver: yupResolver(schema)
    });

    return (
        <form
            noValidate
            style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column"
            }}
            onSubmit={handleSubmit(login as SubmitHandler<SignInFormType>)}
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
