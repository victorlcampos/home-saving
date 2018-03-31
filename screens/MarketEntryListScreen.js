import React from 'react';
import { View,
         Platform,
         ScrollView,
         StyleSheet,
         TouchableOpacity  } from 'react-native';

import {MarketEntryRepository} from '../repositories/MarketEntryRepository';

import { MarketEntryList } from '../components/market-entry/market-entry-list/MarketEntryList';
import { MarketEntryCounter } from '../components/market-entry/market-entry-counter/MarketEntryCounter';
import { AddButton } from '../components/commons/add-button/AddButton';

import { Ionicons } from '@expo/vector-icons';

export default class MarketEntryListScreen extends React.Component {

  state = { entries: MarketEntryRepository.list(this.props.navigation.state.params.marketId) };

  handlers = {
    checkItem: (item) => {
      return () => {
        const {entries} = this.state;

        item.checked = item.checked === undefined ? true : !item.checked;

        this.setState(
          {
            ...this.state,
            entries: MarketEntryRepository.update(this.props.navigation.state.params.marketId, item)
          }
        )
      };
    },

    addItem: (item) => {
      return () => {
        const {entries} = this.state;

        this.setState(
          {
            ...this.state,
            entries: MarketEntryRepository.add(this.props.navigation.state.params.marketId, item)
          }
        )
      }
    }
  }

  addButtonProps = {
    formName: 'MarketEntrytForm'
  }

  render() {
    console.log('props', this.props);

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.container}>
            <View style={styles.toolbar}>
              <MarketEntryCounter {...this.state} />
              <AddButton {...this.props} {...this.handlers} {...this.addButtonProps} />
            </View>
            <View style={styles.list}>
              <MarketEntryList {...this.state} {...this.handlers} />
            </ View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    flexDirection: 'column'
  },
  toolbar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    paddingTop: 0
  },
  list: {
    flex: 4
  }
});
