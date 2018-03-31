import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import t from 'tcomb-form-native';
import _ from 'lodash';

const MarketEntry = t.struct({
  name: t.String,
});

const Form = t.form.Form;

export class MarketEntryForm extends React.Component {
  handleSubmit = () => {
    const id = _.uniqueId('id');
    const value = {
      id,
      ...this._form.getValue(),
    };
    const state = this.props.navigation.state;

    if (value !== null) {
      state.params.addItem(value)();
      this.props.navigation.pop();
    }
  }

  render() {
    const {entries} = this.props;

    return (
      <View style={styles.container}>
        <Form
          ref={c => this._form = c}
          type={MarketEntry}
        />
        <Button
          title="Save"
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#ffffff',
  },
});
