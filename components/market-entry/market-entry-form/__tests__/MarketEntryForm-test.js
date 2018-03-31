import React from 'react';
import { MarketEntryForm } from '../MarketEntryForm';
import renderer from 'react-test-renderer';

it('render form', async () => {
  const tree =  renderer.create(<MarketEntryForm />).toJSON();
  expect(tree).toMatchSnapshot();
});
