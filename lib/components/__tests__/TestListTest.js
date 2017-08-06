import React from 'react';
import TestList from '../TestList';

import renderer from 'react-test-renderer';

describe('TestList', () => {

  const testProps = {
    tests: {
      a: { id: 'a'},
      b: { id: 'b'},
    },
    testActions: {
      lookupAuthor: jest.fn(() => ({})),
    },
  };

  it('renders correctly', () => {
    const tree = renderer.create(
      <TestList
        {...testProps}
      />
    ).toJSON();

    console.log(tree);
  });

});
