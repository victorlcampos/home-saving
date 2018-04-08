import React from 'react';
import { Text,
         StyleSheet,
         View,
         Button,
         Platform,
         TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { SwipeListView } from 'react-native-swipe-list-view';

export class MarketEntryList extends React.Component {
  extractKey = ({id}) => id

  iconName = ({checked}) => {
    return Platform.OS === 'ios' ?
                      `ios-checkmark-circle${checked ? '' : '-outline'}` :
                      `md-checkmark-circle${checked ? '' : '-outline'}`;
  }

  renderItem = ({item}) => {
    return (
      <View style={styles.row} >
        <Text style={{fontSize: 24}}>
          {item.name}
        </Text>

        <TouchableOpacity onPress={this.props.checkItem(item)} >
          <View style={styles.button}>
            <Ionicons name={this.iconName(item)} size={46} />
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    const {entries} = this.props;
    this.state = entries;

    return (
      <SwipeListView
        useFlatList={true}
        disableRightSwipe={true}
        data={entries}
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
  rowBack: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 15,
  },
  button: {
    padding: 5
  },
  deleteBtn: {
    backgroundColor: 'red',
    padding: 15,
  }
})
