import { Profile } from "./types/Profile";
import { ProfileShema } from "./types/Profile";
import { ProfileActions } from "./model/slice/ProfileSlice";
import { ProfileReducer } from "./model/slice/ProfileSlice";
import { fetchProfileData } from "./model/services/fetchProfileData/fetchProfileData";
import { getProfileData } from "./model/selectors/getProfileData/getProfileData";
import { getProfileIsError } from "./model/selectors/getIsError/getIsError";
import { getProfileIsloading } from "./model/selectors/getIsloading/getIsloading";
import { ProfileCard } from "./ui/ProfileCard";
import { getProfileReadOnly } from "./model/selectors/getReadOnly/getReadOnly";
import { getProfileForm } from "./model/selectors/getProfileForm/getProfileForm";
import { updateProfileData } from "./model/services/updateProfileData/updateProfileData";
import { ValidateProfileErrors } from "./types/Profile";

export {
  Profile,
  ProfileShema,
  ValidateProfileErrors,
  updateProfileData,
  getProfileForm,
  ProfileActions,
  ProfileReducer,
  getProfileReadOnly,
  fetchProfileData,
  getProfileData,
  getProfileIsError,
  getProfileIsloading,
  ProfileCard,
};
