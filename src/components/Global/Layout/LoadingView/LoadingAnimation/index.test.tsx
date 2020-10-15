import { LoadingAnimation } from '@adelerium/components/Global/Layout/LoadingView/LoadingAnimation';
import React from 'react';
import renderer from 'react-test-renderer';

describe(`LoadingAnimation`, () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(<LoadingAnimation />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
