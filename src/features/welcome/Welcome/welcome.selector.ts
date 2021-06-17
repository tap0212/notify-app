import { createSelector } from 'reselect';
import get from 'lodash/get';
import { initialState } from './welcome.reducer';

const selectWelcomeDomain = (state: { welcome: any }) => (state.welcome || initialState);

// eslint-disable-next-line import/prefer-default-export
export const selectWelcomeUser = () => createSelector(selectWelcomeDomain, substate => get(substate, 'userName', null));

