export type MockUser = {
    id: number;
    name: string;
    email: string;
    role: string;
    password: string;
};

export type UserInfo = {
    id: number;
    name: string;
    role: string;
};

export type Character = {
    id: number;
    name: string;
    species: string;
    gender: string;
    image: string;
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
