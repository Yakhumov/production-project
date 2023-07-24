

import { useDispatch } from 'react-redux';
import { AppDispatch } from 'app/providers/ThemeProviders/StoreProvider';

export const useAppDispatch = () => useDispatch<AppDispatch>();

