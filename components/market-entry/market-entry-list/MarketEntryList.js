import React from 'react';
import { Text,
         FlatList,
         StyleSheet,
         View,
         Button,
         Platform,
         TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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
      <FlatList
        style={styles.container}
        data={entries}
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
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
    alignItems: 'center',
  },
  button: {
    padding: 5
  }
})
