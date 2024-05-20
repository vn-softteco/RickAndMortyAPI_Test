import { SignInFormType, MockUser } from "@/types";

const users: MockUser[] = [
    {
        id: 1,
        password: "rickmortypass",
        name: "Admin",
        email: "admin@test.com",
        token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJuYW1lIjoiQWRtaW4iLCJyb2xlIjoiYWRtaW4ifQ" +
            ".TR2xr8DBky9El8rrcMxvStqZ9VXyFfDaRgK9sHMu7xA",
        role: "admin"
    },
    {
        id: 2,
        password: "rickmortypass",
        name: "User",
        email: "user@test.com",
        token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIiLCJuYW1lIjoiVXNlciIsInJvbGUiOiJ1c2VyIn0" +
            ".H-M4actBTSFYCrhP2PdTsH0T_Typh2UCdlrsZ87Wdfw",
        role: "user"
    }
];

const verifyMockUser = (data: SignInFormType): Promise<MockUser> => {
    return new Promise((resolve, reject) => {
        const user = users.find(
            ({ email, password }) =>
                email === data.email && password === data.password
        );
        return user ? resolve(user) : reject("User not found");
    });
};

export default {
    verifyMockUser
};
