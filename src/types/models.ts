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
