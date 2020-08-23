import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { ACCESS_TOKEN_KEY, getToken, login, logout, AuthContext } from './components/UserConnections';

import IconWithBadge from './components/IconWithBadge';
import FeedScreen from './screens/FeedScreen';
import ChatScreen from './screens/ChatScreen';
import MailScreen from './screens/MailScreen';
import LearnScreen from './screens/LearnScreen';
import ShareScreen from './screens/ShareScreen';
import FeedDetails from './screens/FeedDetails';
import MailDetails from './screens/MailDetails';
import ShareDetails from './screens/ShareDetails';
import CourseDetails from './screens/CourseDetails';
import MailCreateScreen from './screens/MailCreateScreen';
import ChatContentScreen from './screens/ChatContentScreen';
import ChatCreateScreen from './screens/ChatCreateScreen';
import UploadScreen from './screens/UploadScreen'
import LoginScreen from './screens/LoginScreen'

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
        options={{ tabBarIcon: ({ focused, color, size }) => (<IconWithBadge name={'ios-chatbubbles'} color={color} size={size} badgeCount={0} />) }}
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
    <View>
      <Text>Loading...</Text>
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
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        await setTimeout(() => { }, 15000);
        userToken = await getToken(ACCESS_TOKEN_KEY);
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token
        login(data.username, data.password);
        dispatch({ type: 'SIGN_IN', token: getAccessToken(false) });
      },
      signOut: () => {
        logout();
        dispatch({ type: 'SIGN_OUT' })
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
