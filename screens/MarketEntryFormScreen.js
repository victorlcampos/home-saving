import React from 'react';
import { ScrollView } from 'react-native';
import { MarketEntryForm } from '../components/market-entry/market-entry-form/MarketEntryForm';

export default class MarketEntryFormScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <MarketEntryForm {...this.props} />
      </ScrollView>
    );
  }
}
