import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './style';
const MyTabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
          {
            /* console.log(options); */
          }

          const icon = options.tabBarIcon;

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
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              key={index}
              onLongPress={onLongPress}>
              <View style={styles.btn}>
                <Image
                  source={icon}
                  style={{
                    ...styles.icon,
                    tintColor: isFocused ? '#FA4A0C' : '#130F26',
                  }}
                />
                <Text
                  style={{
                    ...styles.label,
                    color: isFocused ? '#FA4A0C' : '#130F26',
                  }}>
                  {label}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};
export default MyTabBar;
