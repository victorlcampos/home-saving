import React from 'react';
import { Text,
         FlatList,
         StyleSheet,
         Button,
         Platform,
         TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export class MarketList extends React.Component {
  extractKey = ({id}) => id

  goToMarket = (({id}) => {
    console.log('marketId', id);

    return () => {
      this.props.navigation.navigate('MarketEntrytList', {
        marketId: id
      })
    }
  });

  renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.row} onPress={this.goToMarket(item)} >
        <Text style={{fontSize: 24}}>
          {item.name} - {item.date.toLocaleDateString()}
        </Text>
      </TouchableOpacity>
    )
  }

  render() {
    const {markets} = this.props;
    this.state = markets;

    return (
      <FlatList
        style={styles.container}
        data={markets}
        renderItem={this.renderItem}
        keyExtractor={this.extractKey}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    marginBottom: 5,
    backgroundColor: '#CFCFCF',
    alignItems: 'center',
  },
  button: {
    padding: 5
  }
})
