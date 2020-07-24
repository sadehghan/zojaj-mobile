import * as React from 'react';
import { View, I18nManager } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import IconWithBadge from './components/IconWithBadge';
import FeedScreen from './screens/FeedScreen';
import ChatScreen from './screens/ChatScreen';
import MailScreen from './screens/MailScreen';
import LearnScreen from './screens/LearnScreen';
import ShareScreen from './screens/ShareScreen';

I18nManager.forceRTL(false);

// Modal screens
function SettingsScreen() {
  return <View />;
}

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'darkgrey',
      }}
    >
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{ tabBarIcon: ({ focused, color, size }) => (<IconWithBadge name={focused ? "ios-paper" : 'md-paper'} color={color} size={size} badgeCount={0} />) }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{ tabBarIcon: ({ focused, color, size }) => (<IconWithBadge name={focused ? "ios-chatbubbles" : 'md-chatbubbles'} color={color} size={size} badgeCount={1} />) }}
      />
      <Tab.Screen
        name="Mail"
        component={MailScreen}
        options={{ tabBarIcon: ({ focused, color, size }) => (<IconWithBadge name={focused ? "ios-mail-open" : 'ios-mail'} color={color} size={size} badgeCount={0} />) }}
      />
      <Tab.Screen
        name="Learn"
        component={LearnScreen}
        options={{ tabBarIcon: ({ focused, color, size }) => (<IconWithBadge name={focused ? "ios-book" : 'md-book'} color={color} size={size} badgeCount={0} />) }}
      />
      <Tab.Screen
        name="Share"
        component={ShareScreen}
        options={{ tabBarIcon: ({ focused, color, size }) => (<IconWithBadge name={focused ? "ios-cloudy" : 'md-cloud-outline'} color={color} size={size} badgeCount={0} />) }}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeTabs} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
