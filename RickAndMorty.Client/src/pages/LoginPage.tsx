import {DefaultValues, SubmitHandler, useForm} from "react-hook-form";
import {SignInFormType} from "@/types";
import {Button, TextField} from "@mui/material";
import {FormControl} from "@/components";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "@/types/constants.ts";
import {useVerifyMockUseMutation} from "@/hooks/auth.mock.hooks.ts";
import {TokenService} from "@/services";

const schema = yup.object().shape({
    email: yup
        .string()
        .email()
        .required('Email is required'),
    password: yup
        .string()
        .required('Password is required'),
})

const defaultValues: DefaultValues<SignInFormType> = {
    email: '',
    password: '',
}

function LoginPage() {
    const navigate = useNavigate()
    const {mutateAsync: login, isPending} = useVerifyMockUseMutation();

    const { handleSubmit, control } = useForm<SignInFormType>({
        defaultValues,
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<SignInFormType> = (data) => {
        login(data)
            .then((response) => {
                console.log(response)
                TokenService.setToken(response.token)
                navigate(ROUTES.INITIAL_ROUTE, { replace: true })
            })
            .catch((error) => {
                //TODO: Show toast
                console.error("Error", error)
            });
    }

    return (
        <form
            style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
            onSubmit={handleSubmit(onSubmit)}>
            <FormControl
                name="email"
                label="Email"
                control={control}
                type="email"
                component={TextField}
                style={{ marginBottom: '1em' }}
            />
            <FormControl
                name="password"
                label="Password"
                type="password"
                control={control}
                component={TextField}
                style={{ marginBottom: '1em' }}
            />
            <Button variant="contained" type="submit" disabled={isPending}>
                Sign in
            </Button>
        </form >
    );
}

export default LoginPage;