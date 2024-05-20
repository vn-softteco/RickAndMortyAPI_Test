import { SignInFormType, MockUser, UserInfo } from "@/types";

const users: MockUser[] = [
    {
        id: 1,
        password: "rickmortypass",
        name: "Admin",
        email: "admin@test.com",
        role: "admin"
    },
    {
        id: 2,
        password: "rickmortypass",
        name: "User",
        email: "user@test.com",
        role: "user"
    }
];

const verifyMockUser = (data: SignInFormType): Promise<UserInfo> => {
    return new Promise((resolve, reject) => {
        const user = users.find(
            ({ email, password }) =>
                email === data.email && password === data.password
        );

        if (user) {
            const { id, name, role } = user;
            resolve({ id, name, role });
        } else {
            reject("User not found");
        }
    });
};

export default {
    verifyMockUser
};
