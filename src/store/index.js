import { configureStore } from '@reduxjs/toolkit';
// reducer
import users from './slices/users';

export default configureStore({
  reducer: {
    users
  }
});