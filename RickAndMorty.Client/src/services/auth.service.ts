import {
    SignInFormType,
    User,
    LoginResponse
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

const login = (data: SignInFormType): Promise<LoginResponse> => {
    return new Promise((resolve, reject) => {
        let foundUser = users.find(u => u.email === data.email && u.password === data.password)
        if (foundUser) {
            resolve({
                errorMessage: null,
                success: true,
                data: foundUser
            });
        } else {
            reject({
                errorMessage: "No user found",
                success: false,
                data: null
            });
        }
    });
}

export default {
    login
}