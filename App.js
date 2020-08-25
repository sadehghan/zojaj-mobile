import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { getToken, login, logout, AuthContext } from './sections/auth/components/UserConnections';
import { ACCESS_TOKEN_KEY } from './sections/auth/constants/StorageConstants';

import IconWithBadge from './components/IconWithBadge';
import FeedScreen from './sections/feeds/screens/FeedScreen';
import ChatScreen from './sections/chats/screens/ChatScreen';
import MailScreen from './sections/mails/screens/MailScreen';
import LearnScreen from './sections/learns/screens/LearnScreen';
import ShareScreen from './sections/shares/screens/ShareScreen';
import FeedDetails from './sections/feeds/screens/FeedDetails';
import MailDetails from './sections/mails/screens/MailDetails';
import ShareDetails from './sections/shares/screens/ShareDetails';
import CourseDetails from './sections/learns/screens/CourseDetails';
import MailCreateScreen from './sections/mails/screens/MailCreateScreen';
import ChatContentScreen from './sections/chats/screens/ChatContentScreen';
import ChatCreateScreen from './sections/chats/screens/ChatCreateScreen';
import UploadScreen from './sections/shares/screens/UploadScreen'
import LoginScreen from './sections/auth/screens/LoginScreen'

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      lazy={true}
      initialRouteName="اخبار"
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'darkgrey',
      }}
    >
      <Tab.Screen
        name="اخبار"
        component={FeedScreen}
        options={{ tabBarIcon: ({ focused, color, size }) => (<IconWithBadge name={'md-paper'} color={color} size={size} badgeCount={0} />) }}
      />
      <Tab.Screen
        name="کارتابل"
        component={MailScreen}
        options={{ tabBarIcon: ({ focused, color, size }) => (<IconWithBadge name={'ios-mail-open'} color={color} size={size} badgeCount={0} />) }}
      />
      <Tab.Screen
        name="گفتگو"
        component={ChatScreen}
        options={{ tabBarIcon: ({ focused, color, size }) => (<IconWithBadge name={'ios-chatbubbles'} color={color} size={size} badgeCount={3} />) }}
      />
      <Tab.Screen
        name="آموزش"
        component={LearnScreen}
        options={{ tabBarIcon: ({ focused, color, size }) => (<IconWithBadge name={'md-book'} color={color} size={size} badgeCount={0} />) }}
      />
      <Tab.Screen
        name="تولیدات"
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

function SplashScreen() {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', margin: 10 }}>
      <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Loading...</Text>
    </View>
  );
}

export default function App() {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      try {
        await setTimeout(() => { }, 15000);
        const userToken = await getToken(ACCESS_TOKEN_KEY);
        dispatch({ type: 'RESTORE_TOKEN', token: userToken });
      } catch (error) {
        console.log('bootstrapAsync :: ', error.message);
      }
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        const result = login(data.username, data.password);
        if (result) {
          dispatch({ type: 'SIGN_IN', token: getToken(ACCESS_TOKEN_KEY) });
        }
        else {
          console.log('SIGN IN ERROR');
        }
      },
      signOut: () => {
        const result = logout();
        if (result) {
          dispatch({ type: 'SIGN_OUT' });
        }
        else {
          console.log('SIGN OUT ERROR');
        }
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
          {
            state.isLoading ? (
              <Stack.Screen name="Splash" component={SplashScreen} />
            ) : state.userToken != null ? (
              <>
                <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeTabs} />
                <Stack.Screen name="FeedDetails" component={FeedDetails} options={{ headerTitle: props => <FeedDetailsLogoTitle {...props} /> }} />
                <Stack.Screen name="MailDetails" component={MailDetails} options={{ headerTitle: props => <MailDetailsLogoTitle {...props} /> }} />
                <Stack.Screen name="MailCreate" component={MailCreateScreen} options={{ headerTitle: props => <MailCreateLogoTitle {...props} /> }} />
                <Stack.Screen name="ChatContent" component={ChatContentScreen} />
                <Stack.Screen name="ChatCreate" component={ChatCreateScreen} />
                <Stack.Screen name="ShareDetails" component={ShareDetails} />
                <Stack.Screen name="UploadScreen" component={UploadScreen} />
                <Stack.Screen name="CourseDetails" component={CourseDetails} />
              </>
            ) : (
                  <>
                    <Stack.Screen name="SignIn" component={LoginScreen} options={{ title: 'Sign in', animationTypeForReplace: state.isSignout ? 'pop' : 'push', }} />
                  </>
                )
          }
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}