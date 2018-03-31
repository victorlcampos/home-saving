import React from 'react';
import { ScrollView } from 'react-native';
import { MarketForm } from '../components/market/market-form/MarketForm';

export default class MarketFormScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <MarketForm {...this.props} />
      </ScrollView>
    );
  }
}
