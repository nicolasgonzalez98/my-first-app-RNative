import React, {useState} from 'react';
import { TextInput, Text, View, Image } from 'react-native';

export default function App() {
  const [text, setText] = useState('')

  return (
    <View >
      <Image source={require('./assets/favicon.png')} />

      <TextInput
        placeholder='Type here to capitalize...'
        onChangeText={text => setText(text)}
        defaultValue={text}
      />

      <Text>
        {text.toUpperCase()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
