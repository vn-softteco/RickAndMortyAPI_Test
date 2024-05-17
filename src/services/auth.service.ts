import {
    SignInFormType,
    User,
} from '@/types'

const users: User[] = [
    {
        id: 1,
        password: "qwerty",
        name: "Admin",
        email: "admin@test.com",
        token: "abc",
        roles: ["admin", "user"]
    },
    {
        id: 2,
        password: "qwerty",
        name: "User",
        email: "user@test.com",
        token: "def",
        roles: ["user"]
    },
]

const verifyMockUser = (data: SignInFormType): Promise<User> => {
    return new Promise((resolve, reject) => {
        const user = users.find(({ email, password }) => email === data.email && password === data.password);
        return user ? resolve(user) : reject('User not found');
    });
}

export default {
    verifyMockUser
}