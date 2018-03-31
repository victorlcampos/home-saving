import React from 'react';

import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity, Platform } from 'react-native';

export class AddButton extends React.Component {
  addButtonName = () => {
    return Platform.OS === 'ios' ?
                      `ios-add-circle` :
                      `md-add-circle`;
  }

  GoToForm = () => {
    this.props.navigation.navigate(this.props.formName, {
      addItem: this.props.addItem
    })
  }

  render() {
    return (
      <TouchableOpacity onPress={this.GoToForm}>
        <Ionicons name={this.addButtonName()} size={56} />
      </TouchableOpacity>
    );
  }
}
