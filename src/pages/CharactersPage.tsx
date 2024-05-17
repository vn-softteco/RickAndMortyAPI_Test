import { useQuery } from '@tanstack/react-query'
import {CharactersService} from "@/services";

const CharactersPage = () => {
    const { data, status} = useQuery({
        queryKey: ['fetchCharacters'],
        queryFn: CharactersService.getCharacters
    });

    return (
        <>
            <h1>Characters Page</h1>
        </>
    )
}

export default CharactersPage