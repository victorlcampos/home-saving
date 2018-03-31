import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export class MarketEntryCounter extends React.Component {
  numberOfChecked = (entries) => {
    console.log(entries);
    return entries.filter(item => item.checked).length
  }

  totalEntries = (entries) => {
    return entries.length
  }

  render() {
    const {entries} = this.props;

    return (
      <View style={styles.container}>
        <Text style={{fontSize: 32}}> {this.numberOfChecked(entries)} / {this.totalEntries(entries)} </Text>
        <Text style={{fontSize: 32}}> R$ 0 / R$ 220 </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
