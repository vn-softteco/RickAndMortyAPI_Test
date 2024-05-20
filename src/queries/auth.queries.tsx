import { useMutation } from "@tanstack/react-query";
import { SignInFormType, UserInfo } from "@/types";
import { AuthService } from "@/services";
import { useContext } from "react";
import { AuthContext, AlertContext } from "@/components";

export function useLogin() {
    const { setUser } = useContext(AuthContext);
    const { showAlert } = useContext(AlertContext);

    return useMutation({
        mutationFn: (data: SignInFormType) => AuthService.verifyMockUser(data),
        onSuccess: (user: UserInfo) => setUser(user),
        onError: (error: string) => showAlert(error)
    });
}

export function useLogout() {
    const { setUser } = useContext(AuthContext);

    return () => setUser(undefined);
}
