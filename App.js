import * as React from 'react';
import { View, I18nManager, Text, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import IconWithBadge from './components/IconWithBadge';
import FeedScreen from './screens/FeedScreen';
import ChatScreen from './screens/ChatScreen';
import MailScreen from './screens/MailScreen';
import LearnScreen from './screens/LearnScreen';
import ShareScreen from './screens/ShareScreen';
import FeedDetails from './screens/FeedDetails';
import MailDetails from './screens/MailDetails';
import MailCreateScreen from './screens/MailCreateScreen';
import ChatContentScreen from './screens/ChatContentScreen';
import ChatCreateScreen from './screens/ChatCreateScreen';

I18nManager.forceRTL(false);

// Modal screens
function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>settings screen</Text>
    </View>);
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
        options={{ tabBarIcon: ({ focused, color, size }) => (<IconWithBadge name={'md-paper'} color={color} size={size} badgeCount={0} />) }}
      />
      <Tab.Screen
        name="Mail"
        component={MailScreen}
        options={{ tabBarIcon: ({ focused, color, size }) => (<IconWithBadge name={'ios-mail-open'} color={color} size={size} badgeCount={0} />) }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{ tabBarIcon: ({ focused, color, size }) => (<IconWithBadge name={'ios-chatbubbles'} color={color} size={size} badgeCount={0} />) }}
      />
      <Tab.Screen
        name="Learn"
        component={LearnScreen}
        options={{ tabBarIcon: ({ focused, color, size }) => (<IconWithBadge name={'md-book'} color={color} size={size} badgeCount={0} />) }}
      />
      <Tab.Screen
        name="Share"
        component={ShareScreen}
        options={{ tabBarIcon: ({ focused, color, size }) => (<IconWithBadge name={'md-cloud-outline'} color={color} size={size} badgeCount={0} />) }}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function MailCreateLogoTitle() {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 20, }}>
      <Text style={{ color: 'grey', fontSize: 20 }}>Compose</Text>
      <View style={{ flexDirection: 'row', }}>
        <TouchableOpacity style={{ paddingHorizontal: 30 }}><Ionicons name={'md-attach'} size={20} color={'black'} /></TouchableOpacity>
        <TouchableOpacity ><Ionicons name={'md-send'} size={20} color={'black'} /></TouchableOpacity>
      </View>
    </View>
  );
}

function MailDetailsLogoTitle() {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingLeft: 10, paddingRight: 20, }}>
      <Text style={{ color: 'grey', fontSize: 20 }}>Email</Text>
    </View>
  );
}

function FeedDetailsLogoTitle() {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingLeft: 10, paddingRight: 20, }}>
      <Text style={{ color: 'grey', fontSize: 20 }}>Feed</Text>
    </View>
  );
}

function ChatLogoTitle({ route, navigation }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingLeft: 10, paddingRight: 20, }}>
      <Text style={{ color: 'grey', fontSize: 20 }}>Chat</Text>
    </View>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeTabs} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="FeedDetails" component={FeedDetails} options={{ headerTitle: props => <FeedDetailsLogoTitle {...props} /> }} />
        <Stack.Screen name="MailDetails" component={MailDetails} options={{ headerTitle: props => <MailDetailsLogoTitle {...props} /> }} />
        <Stack.Screen name="MailCreate" component={MailCreateScreen} options={{ headerTitle: props => <MailCreateLogoTitle {...props} /> }} />
        <Stack.Screen name="ChatContent" component={ChatContentScreen} />
        <Stack.Screen name="ChatCreate" component={ChatCreateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
