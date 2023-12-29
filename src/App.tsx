import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as Screen from './screen';
import {screenConstant, iconConstant} from './utils/constants';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={screenConstant.INTIAL}
        component={Screen.HomeScreen}
      />
      <Stack.Screen name={screenConstant.INFO} component={Screen.InfoScreen} />
    </Stack.Navigator>
  );
}

function App(): React.JSX.Element {
  console.log(iconConstant);
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => {
          return {
            headerShown: false,
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({focused}) => {
              let iconName: any;
              if (route.name === screenConstant.HOME) {
                console.log('iconconst', iconConstant.home);
                iconName = focused
                  ? iconConstant.home_active
                  : iconConstant.home;
              } else if (route.name === screenConstant.MAP) {
                iconName = focused
                  ? iconConstant.compass_active
                  : iconConstant.compass;
              } else if (route.name === screenConstant.SAVED) {
                iconName = focused
                  ? iconConstant.saved_active
                  : iconConstant.saved;
              } else if (route.name === screenConstant.SETTINGS) {
                iconName = focused
                  ? iconConstant.settings_active
                  : iconConstant.settings;
              }
              return (
                <Image
                  source={iconName}
                  resizeMode="contain"
                  style={styles.footerIcon}
                />
              );
            },
            tabBarShowLabel: false,
            tabBarStyle: {
              backgroundColor: 'black',
              borderTopEndRadius: 50,
              borderTopStartRadius: 50,
            },
          };
        }}>
        <Tab.Screen name={screenConstant.HOME} component={Screen.HomeScreen} />
        <Tab.Screen name={screenConstant.MAP} component={Screen.MapScreen} />
        <Tab.Screen
          name={screenConstant.SAVED}
          component={Screen.SavedScreen}
        />
        <Tab.Screen
          name={screenConstant.SETTINGS}
          component={Screen.SettingsScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  footerIcon: {
    width: 25,
    // height: 10,
  },
});
