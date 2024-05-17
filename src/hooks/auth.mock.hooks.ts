import {useMutation} from "@tanstack/react-query";
import {SignInFormType} from "@/types";
import {AuthService} from "@/services";

export function useVerifyMockUseMutation() {
    return useMutation({
        mutationFn: (data: SignInFormType) => AuthService.verifyMockUser(data)
    })
}