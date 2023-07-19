import { CounterShema } from "entities/Counter";
import { userShema } from "entities/User/model/types/user";

export interface StateShema {
    counter: CounterShema  
    user: userShema
}