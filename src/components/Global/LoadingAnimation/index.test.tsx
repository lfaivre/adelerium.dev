import React from 'react';
import renderer from 'react-test-renderer';

import { LoadingAnimation } from '.';

describe('LoadingAnimation', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<LoadingAnimation />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
