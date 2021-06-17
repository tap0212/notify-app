import TestRenderer from 'react-test-renderer';
import React from 'react';
import BasicButton from '../index';

describe('BasicButton', () => {
  it('should match snapshot', () => {
    const testRenderer = TestRenderer.create(
      <BasicButton onPress={() => null} title="" color="#000000" />,
    );
    expect(testRenderer).toMatchSnapshot();
  });
});
