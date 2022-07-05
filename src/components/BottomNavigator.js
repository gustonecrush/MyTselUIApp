import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TabItem from './TabItem';

const BottomNavigator = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabItem
            key={index}
            label={label}
            isFocused={isFocused}
            onPress={onPress}
            onLongPress={onLongPress}
          />
        );
      })}
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 14,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: -50,
    paddingTop: 15,
    paddingBottom: 30,
    backgroundColor: '#FFF',
    shadowColor: "rgba(100,100,111,.2)",
    shadowOffset: { width: 1, height: 7 },
    shadowRadius: 10,
    shadowOpacity: 0.8,
  },
});