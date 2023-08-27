import { RatingCard } from "entities/Rating";
import {useTranslation} from "react-i18next";
import { Page } from 'shared/ui/Page/Page';
import { StarRating } from 'shared/ui/StarsRating/StarRating';

const MainPage = () => {
    const {t} = useTranslation();

    return (
        <Page >         
            {t('Главная страница')} 

        </Page>
    );
};

export default MainPage; 

