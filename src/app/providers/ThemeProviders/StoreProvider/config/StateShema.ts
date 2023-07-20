import { CounterShema } from "entities/Counter";
import { userShema } from "entities/User/model/types/user";
import { LoginShema } from "features/authUser/model/types/LoginShema";

export interface StateShema {
    counter: CounterShema  
    user: userShema,
    loginForm: LoginShema
}