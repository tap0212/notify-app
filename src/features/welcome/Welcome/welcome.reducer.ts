import { createActions } from 'reduxsauce';
import produce from 'immer';

export const initialState = {
  userName: null,
};

export const { Types: welcomeTypes, Creators: welcomeCreators } = createActions({
  setWelcomeUser: ['userName'],
});

export default produce((draft, action): any => {
  switch (action.type) {
    case welcomeTypes.SET_WELCOME_USER:
      draft.userName = action.userName;
      return draft;
    default:
      return draft;
  }
}, initialState);
