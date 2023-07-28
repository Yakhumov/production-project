import { Profile } from "./types/Profile";
import { ProfileShema } from "./types/Profile";
import { ProfileActions } from "./model/slice/ProfileSlice";
import { ProfileReducer } from "./model/slice/ProfileSlice";
import { fetchProfileData } from "./model/services/fetchProfileData/fetchProfileData";
import { getProfileData } from "./model/selectors/getProfileData/getProfileData";
import { getIsError } from "./model/selectors/getIsError/getIsError";
import { getIsloading } from "./model/selectors/getIsloading/getIsloading";
import { ProfileCard } from "./ui/ProfileCard";
import { getReadOnly } from "./model/selectors/getReadOnly/getReadOnly";
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
  getReadOnly,
  fetchProfileData,
  getProfileData,
  getIsError,
  getIsloading,
  ProfileCard,
};
