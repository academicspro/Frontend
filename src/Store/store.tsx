import { configureStore } from '@reduxjs/toolkit';

import themeSettingSlice from './themeSettingSlice';
import sidebarSlice from './sidebarSlice';
import authSlice from './authSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    themeSetting: themeSettingSlice,
    sidebarSlice: sidebarSlice,
  },
});

export default store;
