import { API_ENDPOINTS } from "@/types/constants.ts";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Character, PaginatedCharacter } from "@/types";
import { API } from "@/services/api.service.ts";

export const useGetCharacters = (name: string | null, page = 1) => {
    return useQuery<PaginatedCharacter>({
        queryKey: [API_ENDPOINTS.CHARACTERS, page, name],
        queryFn: () =>
            API(API_ENDPOINTS.CHARACTERS, {
                params: {
                    page,
                    name
                }
            }),
        retry: 0,
        placeholderData: keepPreviousData
    });
};

export const useGetCharacterById = (id: string) => {
    return useQuery<Character>({
        queryKey: [API_ENDPOINTS.CHARACTERS, id],
        queryFn: () =>
            API(`${API_ENDPOINTS.CHARACTERS}/${id}`, {
                params: {}
            }),
        retry: 2
    });
};
