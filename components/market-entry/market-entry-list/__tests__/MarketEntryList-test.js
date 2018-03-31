import { Text } from 'react-native';
import React from 'react';
import { MarketEntryList } from '../MarketEntryList';
import renderer from 'react-test-renderer';

it('render all entries', async () => {
  const state = {
    entries: [
      {id: 0, name: 'Frutas'},
      {id: 1, name: 'Verduras'},
    ]
  }

  handlers = {
    checkItem: (item) => {
      return () => {
      }
    }
  }

  const tree =  renderer.create(<MarketEntryList {...state} {...handlers} />).toJSON();
  expect(tree).toMatchSnapshot();
});
