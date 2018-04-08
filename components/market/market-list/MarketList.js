import React from 'react';
import { Text,
         FlatList,
         StyleSheet,
         Button,
         Platform,
         TouchableHighlight,
         TouchableOpacity,
         View} from 'react-native';

import { SwipeListView } from 'react-native-swipe-list-view';

import { Ionicons } from '@expo/vector-icons';

const swipeoutBtns = [
  {
    text: 'Button'
  }
]

export class MarketList extends React.Component {
  extractKey = ({id}) => id

  goToMarket = (({id}) => {
    return () => {
      this.props.navigation.navigate('MarketEntrytList', {
        marketId: id
      })
    }
  });

  renderItem = ({item}) => {
    return (
      <TouchableHighlight style={styles.row} onPress={this.goToMarket(item)} underlayColor={'#AAA'} >
        <View>
          <Text style={{fontSize: 24}}>
            {item.name} - {new Date(item.date).toLocaleDateString()}
          </Text>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    const {markets} = this.props;

    return (
      <SwipeListView
        useFlatList={true}
        disableRightSwipe={true}
        data={markets}
        renderItem={this.renderItem}
        style={styles.container}
        keyExtractor={this.extractKey}
        renderHiddenItem={ (rowData, _rowMap) => (
                <View style={styles.rowBack}>
                    <TouchableOpacity onPress={ this.props.removeItem(rowData.item) } style={styles.deleteBtn}>
                        <Text>Delete</Text>
                    </TouchableOpacity>
                </View>
            )}
        leftOpenValue={90}
        rightOpenValue={-90}
        closeOnRowPress={false}
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
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
    alignItems: 'center',
  },
  button: {
    padding: 5
  },
  rowBack: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 15,
  },
  deleteBtn: {
    backgroundColor: 'red',
    padding: 15,
  }
})
