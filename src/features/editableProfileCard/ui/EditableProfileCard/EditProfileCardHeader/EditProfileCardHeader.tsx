import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { HStack } from "shared/ui/Stack";
import { Text } from "shared/ui/Text";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { getAuthData } from "features/authUser";
import { ProfileActions, updateProfileData } from "entities/Profile";
import { getReadOnly } from "entities/Profile";
import { getProfileData } from "entities/Profile";
import { ButtonSize } from "shared/ui/Button/Button";

interface EditableProfileCardHeaderProps {
  className?: string;
}

export const EditableProfileCardHeader = memo(
  (props: EditableProfileCardHeaderProps) => {
    const { className } = props;

    const { t } = useTranslation("profile");
    const authData = useSelector(getAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id 
    const readonly = useSelector(getReadOnly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
      dispatch(ProfileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
      dispatch(ProfileActions.oncancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
      dispatch(updateProfileData());
    }, [dispatch]);

    return (
      <HStack max justify="between" className={classNames("", {}, [className])}>
        <Text title={t("Профиль")} />
        {canEdit && (
          <div>
            {readonly ? (
              <Button
                size={ButtonSize.M}
                theme={ThemeButton.OUTLINE}
                onClick={onEdit}
              >
                {t("Редактировать")}
              </Button>
            ) : (
              <HStack gap="8">
                <Button
                  size={ButtonSize.M}
                  theme={ThemeButton.OUTLINE_RED}
                  onClick={onCancelEdit}
                >
                  {t("Отменить")}
                </Button>
                <Button
                  size={ButtonSize.M}
                  theme={ThemeButton.CLEAR}
                  onClick={onSave}
                >
                  {t("Сохранить")}
                </Button>
              </HStack>
            )}
          </div>
        )}
      </HStack>
    );
  }
);
