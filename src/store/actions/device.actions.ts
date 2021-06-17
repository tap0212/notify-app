export const SET_WINDOW_DIMENSIONS = 'device/set-window-dimensions';

export function setWindowDimensions(window: { height: number; width: number }) {
  return { type: SET_WINDOW_DIMENSIONS, window };
}
