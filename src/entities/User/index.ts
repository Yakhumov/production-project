import { userReducer } from "./model/slice/userSlice";
import { userActions } from "./model/slice/userSlice";
import { userShema } from "./model/types/user";
import { User } from "./model/types/user";
import { getUserinited } from "./model/selectors/getUserInited/getUserinited";

export {userActions,userReducer, getUserinited,userShema,User}