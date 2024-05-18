export type MockUser = {
    id: number;
    name: string;
    email: string;
    token: string;
    role: string;
    password: string;
};

export type UserFromToken = {
    id: number;
    name: string;
    role: string;
};

export type Character = {
    id: number;
    name: string;
    species: string;
    type: string;
    gender: string;
    image: string;
    url: string;
    created: string;
};

export type Pagination = {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
};

export type PaginatedCharacter = {
    info: Pagination;
    results: Character[];
};
