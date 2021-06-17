import produce from 'immer';
import { SET_WINDOW_DIMENSIONS } from 'store/actions/device.actions';

export const initialState = {};
export default produce((draft, action): any => {
  switch (action.type) {
    case SET_WINDOW_DIMENSIONS:
      draft.dimensions = action.window;
      return draft;
    default:
      return draft;
  }
}, initialState);
