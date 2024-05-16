import {DefaultValues, SubmitHandler, useForm} from "react-hook-form";
import {LoginResponse, SignInFormType} from "@/types";
import {Button, TextField} from "@mui/material";
import {FormControl} from "@/components";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useMutation} from "@tanstack/react-query";
import {AuthService, TokenService} from "@/services";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "@/types/constants.ts";

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

    const {mutateAsync:mutateLogin, isPending} = useMutation({
        mutationFn: (data: SignInFormType) => AuthService.login(data),
        onSuccess: (response: LoginResponse) => {
            console.log("Success", response)
            TokenService.setToken(response.data!.token)
            navigate(ROUTES.INITIAL_ROUTE, { replace: true })
        },
        onError:(error) => {
            //TODO: Show toast
            console.error("Error", error)
        }
    });

    const { handleSubmit, control } = useForm<SignInFormType>({
        defaultValues,
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<SignInFormType> = (data) => {
        mutateLogin(data).then(data => {}).catch()
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