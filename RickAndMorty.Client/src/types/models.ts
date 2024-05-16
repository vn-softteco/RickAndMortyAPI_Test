export type User = {
    id: number,
    password: string,
    name: string,
    email: string,
    token: string,
    roles: string[]
}

export type LoginResponse = {
    errorMessage: string | null
    success: boolean
    data: User | null
}