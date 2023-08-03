export interface User {
    id: string,
    username: string
}


export interface userShema{
    authData?: User
    _inited: boolean
}