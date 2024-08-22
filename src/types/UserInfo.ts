
export type UserInfo = {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
}

export type AuthenticationInfo = {
    session: string;
    user: UserInfo;
}
