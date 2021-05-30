// Native Imports
import * as React from 'react';
import {TextInput, View} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const AppTextInput = (props) => {
  // const [text, setText] = React.useState('');

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: '100%',
        borderRadius: 40,
        marginVertical: 10,
        height: 60,
      }}
    >
      {props.icon ? (
        <View style={{width: '10%', marginLeft: 10, flexDirection: 'row'}}>
          <MaterialCommunityIcon
            name={props.icon}
            size={20}
            color={'#2EABEE'}
          />
          <View
            style={{
              width: 1,
              height: 25,
              marginLeft: 10,
              backgroundColor: 'lightgrey',
            }}
          />
        </View>
      ) : (
        <View />
      )}
      <View style={{width: '75%'}}>
        <TextInput
          placeholder={props.placeholder}
          placeholderTextColor={props.placeholderTextColor}
          label={props.label}
          value={props.value}
          onBlur={props.onBlur}
          onChangeText={props.onChangeText}
          style={props.style}
          secureTextEntry={props.secureTextEntry}
        />
      </View>
    </View>
  );
};

export default AppTextInput;
