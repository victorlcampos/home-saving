import React from 'react';

import { View,
         Platform,
         ScrollView,
         StyleSheet,
         TouchableOpacity  } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { MarketRepository } from '../repositories/MarketRepository'
import { MarketList } from '../components/market/market-list/MarketList';
import { AddButton } from '../components/commons/add-button/AddButton';

export default class MarketListScreen extends React.Component {
  state = {
    markets: MarketRepository.list()
  }

  handlers = {
    addItem: (item) => {
      return () => {
        this.setState(
          {
            ...this.state,
            markets: MarketRepository.add(item)
          }
        )
      }
    }
  }

  addButtonProps = {
    formName: 'MarketForm'
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.container}>
            <View style={styles.toolbar}>
              <AddButton {...this.props} {...this.handlers} {...this.addButtonProps} />
            </View>
            <View style={styles.list}>
              <MarketList {...this.props} {...this.state} {...this.handlers} />
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
    justifyContent: 'flex-end',
    padding: 15,
    paddingTop: 0
  }
});
