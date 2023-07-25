import { Profile } from "./types/Profile";
import { ProfileShema } from "./types/Profile";
import { ProfileActions } from "./model/slice/ProfileSlice";
import { ProfileReducer } from "./model/slice/ProfileSlice";
import { fetchProfileData } from "./model/services/fetchProfileData";
import { getProfileData } from "./model/selectors/getProfileData/getProfileData";
import { getIsError } from "./model/selectors/getIsError/getIsError";
import { getIsloading } from "./model/selectors/getIsloading/getIsloading";
import { ProfileCard } from "./ui/ProfileCard";

export {Profile,ProfileShema, ProfileActions, ProfileReducer, fetchProfileData,getProfileData,getIsError,getIsloading,ProfileCard}