
export enum UseRoles {
    ADMIN = 'admin',
    MANAGER = 'manager',
    USER = 'user'
}

export interface User {
    id: string,
    username: string
    avatar?: string
    roles?: UseRoles[] 
}


export interface userShema{
    authData?: User
    _inited: boolean
}