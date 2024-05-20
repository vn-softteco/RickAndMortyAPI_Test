import { useMutation } from "@tanstack/react-query";
import { SignInFormType } from "@/types";
import { AuthService } from "@/services";
import { useContext } from "react";
import { AuthContext } from "@/components/AuthProvider.tsx";

export function useLogin() {
    const { setUser } = useContext(AuthContext);

    return useMutation({
        mutationFn: (data: SignInFormType) => AuthService.verifyMockUser(data),
        onSuccess: (user) => setUser(user),
    });
}

export function useLogout() {
    const { setUser } = useContext(AuthContext);

    return () => setUser(undefined);
}
