import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { UserFromToken } from "@/types";
import { TokenService } from "@/services";

const userFromTokenQuery = "userFromToken";

export function useSetToken() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data: string) => TokenService.setToken(data),
        onSuccess: () =>
            queryClient.invalidateQueries({
                queryKey: [userFromTokenQuery]
            })
    });
}

export function useDeleteToken() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: () => TokenService.deleteToken(),
        onSuccess: () =>
            queryClient.invalidateQueries({
                queryKey: [userFromTokenQuery]
            })
    });
}

export const useGetUserFromToken = () => {
    return useQuery<UserFromToken | null>({
        queryKey: [userFromTokenQuery],
        queryFn: () => TokenService.getUserFromToken(),
        retry: 0
    });
};
