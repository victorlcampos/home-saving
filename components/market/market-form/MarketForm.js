import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import t from 'tcomb-form-native';

const Market = t.struct({
  name: t.String,
  date: t.Date,
});

const options = {
  fields: {
    date: {
      config: {
        format: (date) => new Date(date).toLocaleDateString(),
      },
      mode: 'date'
    }
  }
};

const Form = t.form.Form;

export class MarketForm extends React.Component {
  handleSubmit = () => {
    const value = this._form.getValue();

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
          type={Market}
          options={options}
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
