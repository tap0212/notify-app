namespace Reselect {
  // eslint-disable-next-line import/prefer-default-export
  export function createStructuredSelector<S, T extends Record<string, Reselect.Selector<S>>>(
    selectors: T,
    selectorCreator?: typeof Reselect.createSelector,
  ): Reselect.Selector<S, { [K in keyof T]: ReturnType<T[K]> }>;
}
