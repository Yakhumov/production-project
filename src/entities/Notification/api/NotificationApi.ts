import { rtkApi } from 'shared/api/RtkApi';
import { Notifications } from '../model/types/notification';

const NotificationApi = rtkApi.injectEndpoints({ 
    endpoints: (build) => ({
        getNotification: build.query<Notifications[], null>({  
          query: () => ({
            url: '/notifications',  
          }),
        }),
      }),  
})

export const usenotifications = NotificationApi.useGetNotificationQuery